# Contributing to ReproMitra

Thank you for considering contributing to **ReproMitra**! We welcome all contributions that help improve the project. Follow the steps below to get started.

## 📌 Prerequisites
- Ensure you have **Git** installed.
- Have a **GitHub account** and be signed in.
- Familiarity with GitHub workflows (forking, branching, pull requests).

## 🚀 Contribution Workflow

### 1️⃣ Fork the Repository
1. Go to the [ReproMitra repository](https://github.com/vinay22573/ReproMitra).
2. Click on the **Fork** button (top right) to create your copy.

### 2️⃣ Clone Your Fork
Open your terminal and run:
```bash
# Replace <your-github-username> with your GitHub username
git clone https://github.com/<your-github-username>/ReproMitra.git
cd ReproMitra
```

### 3️⃣ Set Up Upstream Remote
This ensures you can sync updates from the main repository.
```bash
git remote add upstream https://github.com/vinay22573/ReproMitra.git
git remote -v  # Verify the remote
```

### 4️⃣ Pull Latest Changes
Before making changes, always pull the latest updates from the **main repository**:
```bash
git checkout main
git pull upstream main
```

### 5️⃣ Create a Feature Branch
Create a new branch to work on your feature or bug fix:
```bash
git checkout -b <feature-name>
# Example:
git checkout -b doctors-page
```

### 6️⃣ Make Your Changes
- Implement your changes.
- Ensure code follows project conventions.
- Test your changes locally.

### 7️⃣ Commit and Push Your Changes
```bash
git add .
git commit -m "Added <feature-name>"
git push origin <feature-name>
# Example:
git push origin doctors-page
```

### 8️⃣ Create a Pull Request (PR)
1. Go to your forked repository on GitHub.
2. Click on **Compare & pull request**.
3. Ensure the base repository is `vinay22573/ReproMitra` and the base branch is `main`.
4. Add a meaningful PR title and description.
5. Click **Create pull request**.

### 9️⃣ Wait for Review
- The maintainers will review your PR.
- If requested, make necessary changes and push them again.
- Once approved, your changes will be merged!

## ✅ Best Practices
- Keep PRs **small and focused**.
- Write **clear commit messages**.
- Ensure **no merge conflicts** before submitting.
- Follow project guidelines and coding standards.

Happy contributing! 🎉

