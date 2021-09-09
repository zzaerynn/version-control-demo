# Using Version Control Activity

This is an activity to demonstrate some common version control practices and get you more familiar with using version control, particularly using Git and GitHub. 

When you are working individually you may just simply commit directly to the main branch. However, when working in a team you will almost always want to be working on a separate branch until your code is complete and ready to integrate with your teammates' code (otherwise you could be making changes that break their code on accident). Once your code is ready, you would typically make a "Pull Request" on GitHub and have a teammate review the code, then you would merge the code onto the main branch once it had been approved.

In this activity we will practice using Git to:

- create a new branch
- commit changes to that branch
- push changes off your local computer to a remote version of your branch
- make a pull request
- fix a "merge conflict"
- merge code into the main branch of your repository

These are all very typical, common situations in team projects in software development and it's very helpful to learn how to deal with them now.

## Preparation

You need the Git command line tools installed for this activity.  
- See [https://www.atlassian.com/git/tutorials/install-git](https://www.atlassian.com/git/tutorials/install-git)

Note: the steps below were tested on a Mac and may need minor changes to run on Windows. However, all of the git commands are the same across Mac and Windows. The steps below are using the command line, though there are many different Git Clients that provide a GUI to do the same process which you can use if you prefer.

- You will be placed into teams.

- Navigate to the [version control demo repository here](https://github.com/alexckuhn/version-control-demo) and have **only one group member** click "Fork", which will create a copy of the repo in the GitHub account of the person who "forked" it.

- That person should then share the repository with their teammates:
	- Go to Settings -> Manage Access -> Invite Collaborators and add the teammates' GitHub username
	- Also share the repository with the instructor (GitHub username 'alexckuhn')



## Creating changes on a branch

For this first part, you should complete these steps **individually**. Later you will work together for merging the changes in a pull request.

1. Open *Terminal* or the *Command Prompt* 

2. Clone the demo repository to your local machine :
	
	`git clone <REPOSITORY URL>`	 
	
	The repository URL can be seen on GitHub on the Code page when you click the "Code" button. The command will be something like: 

	`git clone https://github.com/account-user-name/version-control-demo.git`


3. Go into the project directory 
	(e.g. on a Mac) 
	
	`cd version-control-demo`


4. Create a new branch to work on :

	`git branch`  
		This command lets you check which branch you are currently on, so you can ensure you are on main (you will be if you just cloned the repository)
	
	`git checkout -b "your-branch-name-here"`  
		This creates and checks out a new branch (include the quotes `""`). Change the name `your-branch-name-here` to whatever you want your branch to be called.

	`git branch`  
		Use this command again to confirm that you are now working on your new branch
		
	`git status`  
		This shows you what has been modified since the last commit. It should say nothing to commit right now.
	

5. Each teammate should separately edit the `NoMatch` function in `src/App.js` (don't worry about "correct" code, but make changes to entirely rewrite how the function works). 

6. Commit the changes you made with :
	
	`git add -A`  
		This adds all of your changes waiting to be committed

	`git commit -m "Your commit message"`  
		Replace "Your commit message" with a description of what changed (again, include the quotes `""`).


7. Make some additional edits in any of the files and make a second commit following the same steps.

	- Right now all the changes are stored ONLY on your local computer. Let's "push" the new branch you created to GitHub, so it is properly backed up and available to the team on the cloud.

8. Push your branch to the server
	
	`git push origin your-branch-name-here`  
		This pushes the all the commits you just made from the version of your branch stored on your computer to a new remote version of your branch attached to the repository on Github.


## Creating a Pull Request to merge your changes into the main branch

[Note for this next part, the first person to do this will have no issues or merge conflicts, but the second person should if you made conflicting changes – that is expected and desired for this activity.]

Now let's assume you are done with the code changes on your branch and have tested them, so now you want to integrate those changes with your team's main codebase (the "main" branch in this case). 

In a company, you would typically need your code to be reviewed, i.e. read and checked over and tested, by at least 1 other developer before it would be merged into to the main repository, as a safety check to determine potential issues BEFORE it is integrated.

1. Go to GitHub.com and [open a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request#creating-the-pull-request). Add your teammates as reviewers. You must then wait for a teammate to [review and "approve" the pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) [they will need to go to GitHub to review it].
	
2. The person reviewing the pull request should try out different features in GitHub to see how the changes are displayed and also try making a comment. Then "Approve" the request in GitHub.

3. Once the pull request is approved, the person who created the pull request should go to GitHub and [merge the pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

4. Now that new changes have been added, everyone using the repo will need to update their local copies of the repo to make sure they are in-sync with the latest code changes.
	
	`git branch `  
		This is to confirm what branch you're on (it should still be your development branch, not main)
	
	`git log`  
		You should see the latest commits on this branch
	
	`git checkout main`  
		This will move you from your development branch to the main branch.
	
	`git log`  
		Check on the history of commits on main – the latest commits which you just merged on Github remotely will not be present yet on your local version.
		
	`git pull origin main`  
		Updates your local copy of the main branch with the latest changes from GitHub

	`git log`  
		You should now see the recent commits and merge that you just finished.


You've now gone through the process of making a branch to work on for development, creating changes on it, and then opening a pull request to merge your changes onto the main branch.


### Dealing with Merge Conflicts

If the pull request cannot be merged automatically by GitHub, there are several steps to follow. This happens in the case where there are conflicting edits between the two branches, for example if two developers edited the same file recently (which you should have intentionally done in this activity).

In order to fix merge conflicts, the developer whose code cannot be committed will need to "pull" all changes from the main branch to their local machine, and manually integrate those changes with the changes they would like to make, and decide which changes to keep and which to discard with regard to the conflicting sections.

1. First you will get the latest changes from the main branch and merge those into your development branch. To do that, in your local repository, run these commands:  

	`git checkout main`
	
	`git pull origin main`

	`git checkout your-branch-name-here`  
		Remember to replace `your-branch-name-here` with the name of your branch

	`git merge main`  
		Merges all of the commits from main into your current branch
	
	
2. Then in your development branch you will make any changes manually to handle the conflicting file(s). Once this is done, make a new commit onto your development branch and push it to GitHub following the same steps as we did earlier in the activity. Once you push these changes back to GitHub, GitHub should then be able to merge the changes automatically.