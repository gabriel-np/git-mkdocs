# Git facile

Un petit exemple de méthode git bien simple.

# Cas exemple

Vous devez coder un site web de documentation en équipe. Vous décidez d'utiliser mkdocs. 
Avec Git, vous allez *pousser* votre code sur un serveur "remote".

###Machine A
```sh
mkdocs new git-facile
cd git-facile/
nano .gitignore (pour retirer .DS_Store, par exemple)
git init
git add .
git commit -m "Initial project state"
git checkout -b develop master *ou* git branch develop + git checkout develop
```

###Machine A : branche develop
```sh
git add "fichier-bidon.txt"
git commit -m "Ajouté fichier fichier-bidon.txt"
```

###Machine A : branche master
```sh
git merge develop master 
```

###Machine B
```sh
git init --bare git-facile
```

###Machine A : branche master
```sh
git remote add origin /Volumes/Gabriel/Sites/git-facile/
...
git push -u origin master || (ensuite on peut utiliser seul.) git push
```

###Machine *Y*
```sh
git clone /Volumes/Gabriel/Sites/git-facile/
...
git pull origin master
```

###Autres commandes git
```sh
git status
git log
git reset
```
