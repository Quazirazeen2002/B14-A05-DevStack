# Setup Instructions

Follow these commands to initialize and push the project:

## Basic Git Commands

```bash
git init
git add .
git remote add origin <your-repository-url>
git push -u origin main
```

### Step-by-step:

1. **Initialize git repository:**
   ```bash
   git init
   ```

2. **Stage all files:**
   ```bash
   git add .
   ```

3. **Set remote origin:**
   ```bash
   git remote add origin https://github.com/Quazirazeen2002/B14-A05-DevStack.git
   ```

4. **Push to repository:**
   ```bash
   git push -u origin main
   ```

## Note

If you need to remove Claude references from commit history, you may want to consider:
- Creating a fresh repository
- Using `git filter-branch` or `git filter-repo` for advanced history rewriting (use with caution)
- Starting fresh with these basic commands

