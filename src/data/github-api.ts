import { portfolioData } from './content';

export async function fetchCommits() {
  const repos = portfolioData.projects
    .map((project) => {
      const match = project.repo.match(/github\.com\/([^/]+\/[^/]+)/);
      return match ? match[1] : null;
    })
    .filter((repo): repo is string => repo !== null);

  const commitPromises = repos.map((repo) =>
    fetch(`https://api.github.com/repos/${repo}/commits`, {
      next: { revalidate: 14400 } // revalidate at most every 4 hours
    }).then((res) => {
      if (!res.ok) {
        throw new Error(`Failed to fetch commits for ${repo}`);
      }
      return res.json().then((commits) => {
        if (commits.length == 0) {
          throw new Error(`No commits found for ${repo}`);
        }
        const commit = commits[0];
        return {
          repo: repo.split('/')[1],
          sha: commit.sha.slice(0, 7),
          date: formatDistanceToNow(new Date(commit.commit.author.date))
        };
      });
    })
  );

  const recentCommits = await Promise.all(commitPromises);
  return recentCommits;
}

function formatDistanceToNow(date: Date): string {
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const differenceInYears = Math.floor(differenceInDays / 365);

  if (differenceInMs < 1000 * 60 * 60 * 24 * 2) {
    return 'today';
  }

  if (differenceInDays < 14) {
    return `${differenceInDays} days ago`;
  }

  if (differenceInDays < 60) {
    return `${Math.floor(differenceInDays / 7)} weeks ago`;
  }

  if (differenceInDays < 365) {
    return `${Math.floor(differenceInDays / 30)} months ago`;
  }

  if (differenceInYears < 2) {
    return `${differenceInYears} year ago`;
  }

  return `${differenceInYears} years ago`;
}
