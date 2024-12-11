## Date:- 09 December 2024

## Topics Covered: Basic Git commands (`git status`, `git add`, `git commit`, `git push`, `git pull`) , File management with `echo`, `touch`, `cat`, and `nano` , Branch management (`git checkout`, `git merge`, `git remote`)

---

## Git Command Basics

### **git status**
- **What does it do?**
  - Displays the status of the working directory and staging area.
- **Common Usage**:
  - `git status`: Shows tracked and untracked files, staged changes, and the current branch.
  - `git status -s`: Displays a short version of the status.
  - `git status -u <mode>`: Controls the display of untracked files (`no`, `normal`, `all`).

---

### **echo, touch, cat, nano** (File Management Basics)

- **echo**: Writes text to a file.
  - `echo "Hello, World!" > myfile.txt`: Creates or overwrites `myfile.txt` with "Hello, World!".
  - `echo "New line" >> myfile.txt`: Appends "New line" to the existing `myfile.txt`.

- **touch**: Creates an empty file.
  - `touch myfile.txt`: Creates an empty file named `myfile.txt`.

- **cat**: Displays the content of a file.
  - `cat myfile.txt`: Outputs the contents of `myfile.txt` to the terminal.

- **nano**: Opens a file in the nano text editor.
  - `nano myfile.txt`: Opens `myfile.txt` in the nano editor for editing.

---

### **git add**
- **What does it do?**
  - Stages changes for commit.
- **Common Usage**:
  - `git add <file>`: Stages a specific file for commit.
  - `git add .`: Stages all changes (new, modified, or deleted files) in the current directory.
  - `git add -p`: Stages parts of a file (useful for large changes).

---

### **git commit**
- **What does it do?**
  - Saves changes to the repository with a commit message.
- **Common Usage**:
  - `git commit -m "<message>"`: Commits changes with a brief message describing the changes.
  - `git commit --amend`: Edits the last commit message or includes additional changes from the staging area.
  - `git commit -a`: Commits all tracked changes (skips `git add`).

---

### **git pull**
- **What does it do?**
  - Fetches and integrates changes from a remote repository.
- **Common Usage**:
  - `git pull origin <branch>`: Pulls updates from a specific branch of the remote repository.
  - `git pull --rebase`: Rebase the current branch on top of the upstream branch instead of merging.
  - `git pull --no-commit`: Pulls changes but doesn’t automatically commit them.

---

### **git push**
- **What does it do?**
  - Sends local changes to the remote repository.
- **Common Usage**:
  - `git push origin <branch>`: Pushes the current branch to the remote repository.
  - `git push --force`: Force-pushes changes, overwriting remote commits (use with caution).
  - `git push --set-upstream origin <branch>`: Sets the upstream branch for the current branch.
  - `git push -u`: Pushes and sets up tracking for the current branch.

---

### **git checkout**
- **What does it do?**
  - Switches branches or restores files.
- **Common Usage**:
  - `git checkout <branch>`: Switches to the specified branch.
  - `git checkout <file>`: Restores a file to its state from the last commit.
  - `git checkout -b <branch>`: Creates and switches to a new branch.

---

### **git merge**
- **What does it do?**
  - Combines changes from one branch into another.
- **Common Usage**:
  - `git merge <branch>`: Merges a specified branch into the current branch.
  - `git merge --abort`: Aborts the merge in case of conflicts and restores the working directory to the pre-merge state.
  - `git merge --no-ff`: Forces a merge commit, even if the merge can be resolved with a fast-forward.

---

### **git remote**
- **What does it do?**
  - Manages connections to remote repositories.
- **Common Usage**:
  - `git remote add <name> <url>`: Adds a remote repository.
  - `git remote -v`: Lists the remote repositories associated with the project.
  - `git remote remove <name>`: Removes a remote repository.
  - `git remote show <name>`: Displays detailed information about a remote repository.

---

