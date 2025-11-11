# HCJK Website Codebase Cleanup Plan

## Issues Identified

### 1. Redundant/Backup Files
- `assets/css/color-palette-old.css` (23KB) - Old version, not used
- `assets/css/variables-backup.css` (8.6KB) - Backup file, not used
- `assets/css/color-palette.css.backup` (22KB) - Backup file, not used
- `assets/css/variables.css.backup` (8.7KB) - Backup file, not used
- `color-palette-mockup.html` (24KB) - Development mockup, not needed in production

### 2. Duplicate Documentation Files
Multiple overlapping documentation files that can be consolidated:
- Multiple README/SETUP files
- Multiple implementation summaries
- Duplicate project plans

### 3. GTM Code Inconsistency
- Some pages have GTM-T3NKKV8P
- Need to verify correct GTM container ID across all pages

### 4. CSS File Organization
Current CSS load order is correct, but we have unused backup files

## Cleanup Actions

### Phase 1: Remove Backup and Old Files
1. Delete `color-palette-old.css`
2. Delete `variables-backup.css`
3. Delete `color-palette.css.backup`
4. Delete `variables.css.backup`
5. Delete `color-palette-mockup.html`

### Phase 2: Consolidate Documentation
Keep essential docs, archive or remove duplicates

### Phase 3: Verify GTM Implementation
Ensure consistent GTM container ID across all pages

### Phase 4: Test and Deploy
1. Test all pages load correctly
2. Verify CSS is working
3. Check all links
4. Deploy to GitHub

## Expected Results
- Cleaner codebase
- Faster repository operations
- No conflicting code
- Latest revisions active
- Reduced confusion for future updates