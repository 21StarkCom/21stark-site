---
title: Sleipnir Huginn — Privacy Policy
description: How the Sleipnir Huginn Chrome extension handles information.
---

_Last updated: October 14, 2026_

## 1. What Huginn is

Sleipnir Huginn ("Huginn") is a Chrome extension. It lets the Sleipnir command-line tool, and AI agents the
operator runs on the same computer, read and act on tabs in the Chrome profile it is installed in: list tabs, read a
page's text and accessibility tree, take screenshots and PDFs, click, type, scroll, navigate, and run accessibility
audits. It is an internal tool, distributed privately.

## 2. Where information goes

Huginn talks only to the Sleipnir native host, a program on the same computer that Chrome starts through native
messaging. Every request comes from that host, and every result goes back to it. **Huginn sends nothing to any
remote server**, including ours: we run no server for it and receive no data from it.

## 3. What Huginn reads

When the operator or a local agent asks for it, Huginn reads, from the tab it is pointed at:

- **Website content:** page text, the accessibility tree, screenshots, PDFs, console messages and network activity.
- **Web history:** the titles and addresses of open tabs, and the pages a tab navigates to.
- **User activity:** the input Huginn sends to a page, and, when the operator records a session, the clicks and
  keystrokes made during it.
- **Authentication information:** a sign-in that the operator asks Huginn to complete types the credentials into the
  page. Huginn does not keep them.

## 4. What Huginn stores

In Chrome's extension storage on the same computer: the installation's identity, the tab groups it created and its
settings. Results, screenshots and recordings go to the local host, which saves them only where the operator asks.
Nothing is kept anywhere else.

## 5. Control

- A new installation can do nothing until the operator grants it actions, one at a time, from the local command line.
  Actions that change a page need an explicit confirmation.
- While Huginn acts in a tab through Chrome's debugger, Chrome shows its "started debugging this browser" bar.
- Removing the extension from `chrome://extensions` deletes its stored data.

## 6. What we never do

We do not collect, sell, rent or share any information from Huginn, use it for advertising or lending decisions, or
use it to train AI models.

## 7. Changes and contact

We may change this policy; the updated version will be posted on this page with a new date at the top. Questions:
[aryeh.kiovetsky@evinced.com](mailto:aryeh.kiovetsky@evinced.com).
