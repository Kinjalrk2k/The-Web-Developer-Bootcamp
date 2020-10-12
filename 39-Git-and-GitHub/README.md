# Git
- Version control system
- Can handle projects of any size with speed and efficiency 
- Allows to handle multiple versions
- Easy collaboration

## Introduction
- Git vs GitHub
    - Git is a technology, GitHub is a application which uses Git

#### "... a lot of Novel Analogy later ..."

## Git commands
- `git init`
    - Initializes git
    - The path where git is initialized, only that path along with all subdirectories are tracked
    - `.git` - hidden folder: this is where the magic happens
- `git status`
    - Asks git for it's status
    - Shows untracked files, new files, modified files etc
    - "working directory clean" → No untracked files
- `git add`
    - We can add one file at a time to → That will be elevated from untracked files to new files
    - We can pass the entire directory by using `.`
- `git commit`
    - Commits the new files (staged ones)
    - Commits are checkpoints in time: means we can come back to a commit from the future
    - `-m` lets us add a Commit message
- `git log`
    - Log/History of all the made commits
    - With timestamp and author name
    - With commit hash: This is the unique commit identifier
- `git checkout`
    - Checking something out
    - To checkout a branch or some previous commit
    - `HEAD` is a pointer in time. When we checkout, the `HEAD` is detached from the master to the specific commit
    - `git checkout master` brings back to the latest
    - `git revert --no-commit <comitHash>--HEAD` - revert to a previous commit.