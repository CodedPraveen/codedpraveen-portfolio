# Linux (Ubuntu) MySQL Installation

Follow these steps to install MySQL and secure it for development:

## Step 1: Update package index

```bash
sudo apt update
```

## Step 2: Install MySQL server

```bash
sudo apt install mysql-server
```

## Step 3: Secure installation

```bash
sudo mysql_secure_installation
```

## Notes

- Set a strong root password
- Remove anonymous users
- Disable remote root login in production
