## Date:- 11 December 2024  
## Topics covered: REBASE, MERGE, ORPHAN BRANCH, PRUNE.  

---

### 1. Git Rebase Commands
- **What does it do?**  
  Replays your commits onto a new base branch, providing a cleaner and more linear commit history.  
- **Common Usage**:
  - `git rebase <base-branch>`: Reapplies your branch’s commits on top of `<base-branch>`, updating your branch.
  - `git rebase -i <base-branch>`: Starts an interactive rebase to edit, squash, or re-order commits.
  - `git rebase --continue`: Continues the rebase process after resolving conflicts.
  - `git rebase --abort`: Cancels the rebase and restores the branch to its original state before the rebase began.

---

### 2. Git Merge vs. Rebase
- **What does it do?**  
  Both commands combine changes from one branch into another but behave differently.  
- **Commands**:
  - `git merge <branch-name>`: Merges `<branch-name>` into the current branch, creating a merge commit. Keeps the full history intact, including the diverging branches.
  - `git rebase <branch-name>`: Reapplies your branch’s commits on top of `<branch-name>` for a linear history. Does not retain the branch divergence history.

---

### 3. Orphan Branch Commands
- **What is an orphan branch?**  
  An orphan branch starts with no commit history, making it ideal for creating independent content such as documentation or a GitHub Pages site.  
- **Common Usage**:
  - `git checkout --orphan <branch-name>`: Creates a new branch without any history.
  - `git reset --hard`: Clears the working directory after creating the orphan branch.
  - `git add <file>`: Stages files for commit.
  - `git commit -m "<message>"`: Commits changes with a message.
  - `git push origin <branch-name>`: Pushes the orphan branch to the remote repository.
  - `git merge <orphan-branch> --allow-unrelated-histories`: Merges an orphan branch into the main branch, ignoring history differences.

---

### 4. Git Prune
- **What does it do?**  
  Removes unreachable objects, such as dangling commits, from the local repository. Useful for cleaning up unnecessary data.  
- **Common Usage**:
  - `git prune`: Cleans up unreachable objects from the repository.
  - `git prune --dry-run`: Previews the objects to be deleted before making any changes.
  - **Note**: Git automatically runs prune during garbage collection (`git gc`).

---
