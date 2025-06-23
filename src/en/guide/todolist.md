# TODO List

## Add Features💕

1. :white_check_mark: ~~Add image upload via paste~~ (Completed on 2024.7.22)
2. :white_check_mark: ~~Add copy link in markdown, html, etc. formats~~ (Completed on 2024.7.21)
3. :white_check_mark: ~~Add admin entrance on upload page~~ (Completed on 2024.7.21)
4. :memo: Add user personalized configuration API
   - ~~Custom login and upload page background~~ (Completed on 2024.8.25)
   - ~~Custom image bed name and logo~~ (Completed on 2024.8.26)
   - ~~Custom website title and icon~~ (Completed on 2024.8.26)
   - ~~Custom background switch interval~~ (Completed on 2024.9.11)
   - ~~Custom background opacity~~ (Completed on 2024.9.12)
   - ~~Custom footer portal~~ (Completed on 2024.10.20)
   - ~~Global custom link prefix~~ (Completed on 2024.12.27)
   - ~~Hide footer option~~ (Completed on 2025.2.4)
5. :white_check_mark: ~~Add random image API~~ (Completed on 2024.7.25)
6. :white_check_mark: ~~Improve multi-format link display, add ubb format support~~ (Completed on 2024.8.21)
7. :white_check_mark: ~~Improve login logic, add backend auth code verification~~ (Completed on 2024.8.21)
8. :white_check_mark: ~~Support URL paste upload~~ (Completed on 2024.8.23)
9. :white_check_mark: ~~Auto-compress images larger than 5MB before upload~~ (Completed on 2024.8.26)
10. :white_check_mark: ~~Refactor upload page toolbar, support custom compression (pre-upload & storage)~~ (Completed on 2024.9.28)
11. :white_check_mark: ~~Refactor admin panel, optimize auth & display, add image detail page~~ (Completed on 2024.12.20)
12. :white_check_mark: ~~Add admin stats, IP records, IP blacklist, upload IP blacklist, etc.~~ (Upload IP blacklist completed on 2024.12.20, access records postponed due to high KV cost)
13. :white_check_mark: ~~Click link on upload page to auto-copy to clipboard~~ (Completed on 2024.9.27)
14. :white_check_mark: ~~Remember upload settings (method, link format, etc.)~~ (Completed on 2024.9.27, **two upload methods merged**)
15. :white_check_mark: ~~No password set, skip login page~~ (Completed on 2024.9.27)
16. :white_check_mark: ~~Delete only successful uploads, retry failed uploads~~ (Completed on 2024.9.28)
17. :white_check_mark: ~~Optimize file naming for paste uploads~~ (Completed on 2024.9.26)
18. :white_check_mark: ~~Add R2 bucket support~~ (Completed on 2024.11.5)
19. :white_check_mark: ~~Admin panel batch blacklist/whitelist~~ (Completed on 2024.12.14)
20. :white_check_mark: ~~Telegram Channel bot & channel data for upload record, migration, backup~~ (Completed on 2024.12.4)
21. :white_check_mark: ~~Support custom naming (original only, random prefix only, or default random prefix_original)~~ (Completed on 2024.12.4)
22. :white_check_mark: ~~Auto-switch channel on upload failure~~ (Completed on 2024.12.12)
23. :white_check_mark: ~~Backend list API pagination~~ (Completed on 2024.2.5)
24. :white_check_mark: ~~Support custom link prefix~~ (Completed on 2024.12.4)
25. :memo: Integrate alist or implement webdav (under evaluation)
26. :white_check_mark: ~~File detail shows file size~~ (Completed on 2024.12.10)
27. :white_check_mark: ~~Admin can set global default link prefix~~ (Completed on 2025.2.1)
28. :white_check_mark: ~~Support more file formats~~ (Completed on 2024.12.9)
29. :white_check_mark: ~~Auto-clear CF CDN cache on delete/whitelist/blacklist~~ (Completed on 2024.12.11)
30. :white_check_mark: ~~Record selection order in admin batch select~~ (Completed on 2024.12.20)
31. :memo: Support custom upload path & album for images
    - ~~Folder delete~~ (Completed on 2025.3.6)
    - ~~Move file~~ (Completed on 2025.3.7)
    - ~~Fix admin load more bug~~ (Completed on 2025.3.6)
    - ~~Admin batch operation supports folders~~ (Completed on 2025.3.6)
    - ~~Admin pagination logic adjustment~~ (Completed on 2025.3.6)
32. :white_check_mark: ~~Support multiple Telegram Bot Token load balancing~~ (Completed on 2025.2.4)
33. :white_check_mark: ~~Admin provides detailed settings info and guide~~ (Completed on 2025.2.5)
34. :white_check_mark: ~~Logo update, login page optimization, settings tips, and more UI improvements~~ (Completed on 2025.2.2)
35. :white_check_mark: ~~Integrate S3 API channel~~ (Completed on 2024.2.3)
36. :white_check_mark: ~~Support short link naming~~ (Completed on 2025.2.1)
37. :white_check_mark: ~~Support dark mode~~ (Completed on 2025.1.11)
38. :hourglass_flowing_sand: Support KV backup & restore
39. :white_check_mark: ~~Footer can be hidden~~ (Completed on 2025.2.4)
40. :hourglass_flowing_sand: Enhanced search function
41. :white_check_mark: Support pasting multiple links, external link management
42. :hourglass_flowing_sand: Record MD5 on upload, support file hard link
43. :hourglass_flowing_sand: Show recent uploads on upload page
44. :hourglass_flowing_sand: Configure upload page defaults from admin
45. :white_check_mark: Add announcement feature
46. :hourglass_flowing_sand: Set width/height params when accessing images
47. :hourglass_flowing_sand: Convert image format on upload


## Fix Bugs👻

1. :white_check_mark: ~~Fix API upload not showing in admin~~ (Fixed on 2024.7.25)
2. :white_check_mark: ~~Migrate to TG channel upload due to telegra.ph closure~~ (Fixed on 2024.9.7)
3. :white_check_mark: ~~Fix admin infinite refresh when no admin auth set~~ (Fixed on 2024.9.9)
4. :white_check_mark: ~~Fix some videos not previewing (file issue, cannot fix)~~
5. :white_check_mark: ~~Add new image review channel~~ (Completed on 2025.6.23)
6. :white_check_mark: ~~R2 channel deletes from bucket when deleted in admin~~ (Fixed on 2024.12.4)
7. :white_check_mark: ~~Add CORS header `access-control-allow-origin: *` to file response~~ (Fixed on 2024.12.9)
8. :white_check_mark: ~~Add access whitelist to upload page~~ (Fixed on 2024.12.11)
9. :white_check_mark: Fix long file name blocking action buttons
10. :white_check_mark: Fix `list` API data integrity issue
