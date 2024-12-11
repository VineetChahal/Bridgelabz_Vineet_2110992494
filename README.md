## Date:- 11 December 2024
## Topics covered: REBASE, MERGE, ORPHAN BRANCH, PRUNE.

#### 1. Git Rebase Commands
  +  git rebase <base-branch>: Replays commits on top of <base-branch>, updating your branch.
  +  git rebase -i <base-branch>: Starts an interactive rebase to modify commits.
  +  git rebase --continue: Continues the rebase after resolving conflicts.
  +  git rebase --abort: Aborts the rebase and reverts to the original state.

#### 2. Git Merge vs Rebase
  +  git merge <branch-name>: Merges the <branch-name> into the current branch, creating a merge        commit.
  +  git rebase <branch-name>: Reapplies your branch’s commits on top of <branch-name>, creating a      linear history.

#### 3. Orphan Branch Commands
  +  git checkout --orphan <branch-name>: Creates a new branch with no history.
  +  git reset --hard: Clears the working directory after creating the orphan branch.
  +  git add <file>: Stages files for commit.
  +  git commit -m "<message>": Commits changes with a message.
  +  git push origin <branch-name>: Pushes the orphan branch to the remote.
  +  git merge <orphan-branch> --allow-unrelated-histories: Merges an orphan branch into main,          ignoring history differences

#### 4. Git Prune
  +  git prune: Removes unreachable objects (e.g., dangling commits) from the local repository.         Use with --dry-run to preview changes before deletion.
