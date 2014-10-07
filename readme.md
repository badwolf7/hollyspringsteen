# hollyspringsteen.com
### Holly Springsteen
[hollyspringsteen.com](http://104.131.66.14/hspringsteen/)

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

