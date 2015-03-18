# [hollyspringsteen.com](http://hollyspringsteen.com)
### Holly Springsteen

[hollyspringsteen.com](http://hollyspringsteen.com)

<a href="https://www.flickr.com/photos/hitomizu/15474757755" title="hollyspringsteen.com - Home by Holly Springsteen, on Flickr"><img src="https://farm3.staticflickr.com/2948/15474757755_065d708842_m.jpg" width="191" height="240" alt="hollyspringsteen.com - Home"></a>

## New Server Procedure
### Create Server
#### 1. SSH Into The Server
```
$ ssh root@Server_IP_Address
enter password
```
#### 2. Create Non-Root User
```
$ sudo adduser {username}
$ sudo adduser {username} sudo
```
#### 3. End SSH Session
```
$ exit
```
#### 4. Login As Non-Root User
```
$ ssh {username}@Server_IP_Address
enter password
```
#### 5. Update Package System
```
$ sudo apt-get update
enter password
```
#### 6. Upgrade Package System
```
$ sudo apt-get upgrade
```
#### 7. Update Packages For New Version
```
$ sudo apt-get update
```
#### 8. Update System Level Packages
```
$ sudo aptitude update
$ sudo aptitude safe-upgrade
$ sudo reboot
```

### Apache: Install & Config
#### 1. Install Apache2
```
$ sudo apt-get install apache2
```
#### 2. Configure ServerName
```
$ sudo pico /etc/apache2/conf.d/security
    Add
        ServerName localhost
$ sudo service apache2 restart
```
#### 3. Restrict Access
```
$ sudo pico /etc/apache2/conf.d/security
Uncomment <Directory />
    Add
        Options FollowSymLinks
$ sudo service apache2 restart
```

### Git: Install & Config
#### 1. Install Git
```
$ sudo apt-get install git
$ sudo apt-get install git-core
```
#### 2. Configure Git
```
$ git congit config --global user.name “NAME”
$ git config --global user.email Your@Email.com
```
#### 3. Confirm Settings
```
$ git config --list
```
#### 4. Create SSH Keys For Github Access
```
$ ssh-keygen -t rsa -C "YourEmail@example.com"
    This will ask if you want to customize the name, you don’t.  Just press enter.
enter passphrase
re-enter passphrase
```
#### 5. Put the RSA key on file with github.com so this server is treated as a trusted machine.
```
$ less ~/.ssh/id_rsa.pub
```

- copy all contents
    * Add the SSH Key to your Github account under the Account Settings

#### 6. SSH into Github for Verification
```
$ ssh git@github.com
```

### Initialize Hooks
#### 1. Change Ownership of directory & Remove Default Files
```
$ sudo chown {username} /var/www/
$ rm /var/www/index.html
```
#### 2. Create repos/
```
$ cd /var/
$ sudo mkdir repos
$ sudo chown {username} repos
$ cd repos/
```
#### 3. Create '.git' folder for /repos
```
$ mkdir {repoName}.git
$ cd {repoName}.git/
```
#### 4. Initialize git --bare & Access hooks/
```
$ git init --bare
$ cd hooks/
```
#### 5. Create Executable file
```
$ pico post-receive
    // Inside File
        #!/bin/sh
        GIT_WORK_TREE=/var/www git checkout -f
$ chmod +x post-receive
```

### Push Files to Server
#### 1. Go to File Location & Initialize git
In a New Terminal Window
```
$ cd {file/path/}
$ git init
```
#### 2. Add & Commit
```
$ git add -A
$ git commit -m "commit message"
```
#### 3. Add Remote & Push to Server
```
$ git remote add {repoName} ssh://{username}@{IPAddress}/var/repos/{repoName}.git
$ git push {repoName} master
```

## Merge Dev Branch With Master
### Basic Branching
To create a branch and switch to it at the same time you can run the <code>git checkout</code> command with the <code>-b</code> switch.
```
$ git checkout -b {branchName}
```

This is shorthand for:
```
$ git branch {branchName}
$ git checkout {branchName}
```

1. Use <code>git checkout</code> for viewing a branch

```
$ git checkout master
Switched to branch 'master'
```

2. Set up <code>hotfix</code> branch

```
$ git checkout -b hotfix
Switched to a new branch 'hotfix'
$ git commit -m "commit message"
```

3. Merge your <code>hotfix</code> with master

```
$ git checkout master
$ git merge hotfix
```

4. Delete <code>hotfix</code>

```
$ git checkout {branchName}
Switched to branch {branchName}
$ git commit -m "commit message"
```

### Basic Merging
1. Once changes are complete merge your branch with <code>master</code> by using the <code>git merge</code> command.

```
$ git checkout master
$ git merge {branchName}
```

2. If your branch <code>{branchName}</code> is no longer needed it can be removed.

```
$ git branch -d {branchName}
```

### Basic Merge Conflicts
If you changed the same part of a file in seperate branches Git won't be able to merge cleanly.

For Example:

```
$ git merge {branchName}
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

To check which files are unmerged run <code>git status</code>

```
$ git status
On branch master
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:      index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

Anything that has merge conflicts is listed as unmerged. Git adds standard conflict-resolution markers to the files that have conflicts so you can open them manually and resolve the conflicts.

For Example:

```
<<<<<<< HEAD
<footer>contact : email.support@github.com</footer>
=======
<footer>
  please contact us at support@github.com
</footer>
>>>>>>> {branchName}
```

Everything above the <code>=======</code> is from the master whereas everything below is from the {branchName}. 

Change code to leave only the desired code

```
<footer>
  please contact us at support@github.com
</footer>
```
    
Run <code>git add</code> on files updated.

===== or =====

Use the graphical tool to resolve the issues by running <code>git mergetool</code>.

```
$ git mergetool

This message is displayed because 'merge.tool' is not configured.
See 'git mergetool --tool-help' or 'git help config' for more details.
'git mergetool' will now attempt to use one of the following tools:
opendiff kdiff3 tkdiff xxdiff meld tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc3 codecompare vimdiff emerge
Merging:
index.html

Normal merge conflict for 'index.html':
  {local}: modified file
  {remote}: modified file
Hit return to start merge resolution tool (opendiff):
```

Verify all conflicts have been resolved

```
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   index.html
```

If all changes are accurate then finalize the merge commit with <code>git commit</code>

