# hollyspringsteen.com
### Holly Springsteen
- [production](http://104.131.66.14/)

- [staging](http://104.131.80.29/)

![screenshot](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

## New Server Procedure
### Create Server
#### 1. SSH Into The Server
    $ ssh root@Server_IP_Address
    enter password
#### 2. Create Non-Root User
    $ sudo adduser {username}
    $ sudo adduser {username} sudo
#### 3. End SSH Session
    $ exit
#### 4. Login As Non-Root User
    $ ssh {username}@Server_IP_Address
    enter password
#### 5. Update Package System
    $ sudo apt-get update
    enter password
#### 6. Upgrade Package System
    $ sudo apt-get upgrade
#### 7. Update Packages For New Version
    $ sudo apt-get update
#### 8. Update System Level Packages
    $ sudo aptitude update
    $ sudo aptitude safe-upgrade
    $ sudo reboot

### Apache: Install & Config
#### 1. Install Apache2
    $ sudo apt-get install apache2
#### 2. Configure ServerName
    $ sudo pico /etc/apache2/conf.d/security
        Add
            ServerName localhost
    $ sudo service apache2 restart
#### 3. Restrict Access
    $ sudo pico /etc/apache2/conf.d/security
    Uncomment <Directory />
        Add
            Options FollowSymLinks
    $ sudo service apache2 restart

### Git: Install & Config
#### 1. Install Git
    $ sudo apt-get install git
    $ sudo apt-get install git-core
#### 2. Configure Git
    $ git congit config --global user.name “NAME”
    $ git config --global user.email Your@Email.com
#### 3. Confirm Settings
    $ git config --list
#### 4. Create SSH Keys For Github Access
    $ ssh-keygen -t rsa -C "YourEmail@example.com"
        This will ask if you want to customize the name, you don’t.  Just press enter.
    enter passphrase
    re-enter passphrase
#### 5. Put the RSA key on file with github.com so this server is treated as a trusted machine.
    $ less ~/.ssh/id_rsa.pub
- copy all contents
    * Add the SSH Key to your Github account under the Account Settings

#### 6. SSH into Github for Verification
    $ ssh git@github.com

### Initialize Hooks
#### 1. Change Ownership of directory & Remove Default Files
    $ sudo chown {username} /var/www/
    $ rm /var/www/index.html
#### 2. Create repos/
    $ cd /var/
    $ sudo mkdir repos
    $ sudo chown {username} repos
    $ cd repos/
#### 3. Create '.git' folder for /repos
    $ mkdir {repoName}.git
    $ cd {repoName}.git/
#### 4. Initialize git --bare & Access hooks/
    $ git init --bare
    $ cd hooks/
#### 5. Create Executable file
    $ pico post-receive
        * Inside File
            #!/bin/sh
            GIT_WORK_TREE=/var/www git checkout -f
    $ chmod +x post-receive

### Push Files to Server
#### 1. Go to File Location & Initialize git
In a New Terminal Window

    $ cd {file/path/}
    $ git init

#### 2. Add & Commit
    $ git add -A
    $ git commit -m "commit message"
#### 3. Add Remote & Push to Server
    $ git remote add {repoName} ssh://{username}@{IPAddress}/var/repos/{repoName}.git
    $ git push {repoName} master

## Merge Dev Branch With Master
### Basic Branching
To create a branch and switch to it at the same time you can run the <code>git checkout</code> command with the <code>-b</code> switch.
    $ git checkout -b {branchName}

This is shorthand for:
    $ git branch {branchName}
    $ git checkout {branchName}

Use <code>git checkout</code> for viewing a branch

