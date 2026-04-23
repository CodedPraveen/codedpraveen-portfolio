### Created By CodedPraveen

## 1. For Git Version Check

```bash
git --version
```

## 2. From Github Repository to local computer

- `https` code link

```
git clone https://github.com/CodedPraveen/Project.git
```

## 3. Use your Folder Direct / Terminal

- here 2 ways First

```
code -r .\Project
```

- and second enter

```
cd .\Project\ // "
```

- to return use

```
"cd ..
```

### before terminal

- #### C:\Folder <br>

### after terminal<br>

- #### C:\Folder\Project

## 4. Check Hidden File in Terminal

- Mac

```
ls -a
```

- Window

```
ls -Force
```

- Git bash

```
dir -Force
```

## 5. Git Status

- to see file update or modify

```
git status
```

## 6. add a File into Github Repository

```
git add .\index.html
```

- and also we use

```
git add .
```

- and than

```
git commit -m "Add Index Files"
```

- added file in local computer show it so you do this

```
git pull origin main --rebase
```

## 7. To see your code and Folder in Github Repository

```

git push origin main

```

- than link your VS Code to Github

## If You want Add New Folder using Terminal

```

mkdir New Folder

```

### You Enter a Intermediate level

## Next how to your local folder add in Github Repository

## 1. Git init

- in your new folder terminal

```

git init

```

## 2. Make New Github Repository Than in VS Code Terminal

- like my Folder name LocalRepository

```

git remote add origin https://github.com/CodedPraveen/LocalRepository.git

```

## 3. To verify Remote

- Remote = github Repository location link

```

git remote -v

```

## 4. Git Branch

```

git branch

```

- rename branch

```

git branch -M main

```

- To update Repository

```

git push -u origin main

```

### -u // chill (iski tension mat le)

## You did it

## 5. If You Do Changes Than

```
git add .
```

```
git commit -m "I Do Changes in Index.html"
```

- And see in Github Repository to

```
git push
```

## Finnaly How Workflow Looks

- I. Github Repository<br>
- II. Clone in VS Code<br>
- III. Make Changes<br>
- IV. Git add . (impo.)<br>
- V. Commit<br>
- Vi. push to see in Repository

#### Another Topic

## 1 Git Branch

- Default branch is main and See Branch

```
git branch
```

## 2. Create and Switch Branch

```
git checkout -b branch1
```

## 3. Switch

```
git checkout main
```

## 4. Delete Branch Locally /

```
git branch -d branch1

```

## Remote Branch delete

```

git push origin --delete branch1

```

## 5. To See Branch in Github Follow Step

- make changes in any file file

```

git add .

```

```

git commit -m "What Changes"

```

```

git push origin branch1

```

## 6. See Changes

```

git diff main

```

## 7. Merging Code

- If You Went To Merge
  Way 1

```

git merge branch1

```

### Way 2

- Create a new Pull Request in Github and merge.
- How to create pull request first repeat # 5 and Go to Github and see compare & pull request and Done it.
- So in VS Code main branch you see not code update than we do :-

```

git pull origin main

```

## 8. Resolving Merge Conflicts

- First merge code <br>
- if not branch change so first change it

```

git merge branch1

```

- VS Code suggest what kind of change you keep than select what type of you went and than repeat # 5
- refresh your github Repository

#### chack out both branch and push request.

```

git checkout branch1

```

```

git push

```

## You are Going to Master Level

## 1. Undoing changes

### Case 1: Staged Changes

- if we delete code and add it and only remain to commit

```

git reset branch1

```

### Case 2 : Commit Changes ( for one commit )

```

git reset HEAD~1

```

### Case 3 : Commit Changes ( for many commit )<br>

- commit hash = in the ( git log ) commit number

```

git reset <-commit hash->

```

- for pure delete

```

git reset --hard <-commit hash->

```

- Check commit history and find commit number

```

git log

```

## 2. Fork (Rough Copy)

- Go to Github and search what we want to copy and when you go on search Repository than click on fork and you make it. copy !

## Additional changes after publish

## One git repo

- inside mutiple folder we use only one specail folder than

```

git clone --no-checkout <git link>
cd <choose directory>

git sparse-checkout init --cone
git sparse-checkout set "special folder"

git checkout

```

## see where git init

```

git rev-parse --show-toplevel

```

```

Bye Bye

```

```

```
