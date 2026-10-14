---
title: Sleipnir Huginn Secrets — Privacy Policy
description: How the Sleipnir Huginn Secrets Chrome extension handles information.
---

_Last updated: October 14, 2026_

## 1. What Huginn Secrets is

Sleipnir Huginn Secrets ("Secrets") is a Chrome extension that fills sign-in forms and authenticator codes from
Mímir, a password vault on the same computer, and saves new sign-ins to it. It is an internal tool, distributed
privately.

## 2. Where information goes

Secrets talks only to its native host, a program on the same computer that Chrome starts through native messaging,
which reads and writes the Mímir vault on that computer. **Secrets sends nothing to any remote server**, including
ours: we run no server for it and receive no data from it.

## 3. What Secrets reads and writes

- **Authentication information:** usernames, passwords and authenticator codes from the vault, which it types into
  the sign-in form you are on, and the sign-ins you choose to save, which it reads from that form and passes to the
  vault.
- **Website content and addresses:** the sign-in forms on a page, and the page's address, to match it with the
  right vault item.

Vault access needs the vault to be unlocked on that computer, and filling or saving happens only when you or the
local operator ask for it.

## 4. What Secrets stores

Its installation identity and settings, in Chrome's extension storage on the same computer. Passwords and codes are
kept only in the vault, never in the extension.

## 5. What we never do

We do not collect, sell, rent or share any information from Secrets, use it for advertising or lending decisions, or
use it to train AI models.

## 6. Changes and contact

We may change this policy; the updated version will be posted on this page with a new date at the top. Questions:
[aryeh.kiovetsky@evinced.com](mailto:aryeh.kiovetsky@evinced.com).
