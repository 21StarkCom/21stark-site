---
title: Sleipnir Huginn — Privacy Policy
description: How the Sleipnir Huginn Chrome extension handles information.
---

_Last updated: October 14, 2026_

## 1. What Huginn is

Sleipnir Huginn ("Huginn") is a Chrome extension. It lets the Sleipnir command-line tool, and AI agents the
operator runs on the same computer, read and act on tabs in the Chrome profile it is installed in, and in that
profile's incognito windows when "Allow in Incognito" is turned on. It can list tabs, read a page's text and
accessibility tree, take screenshots and PDFs, click, type, scroll, navigate, upload files into a page, track
downloads, run scripts in a page, and run accessibility audits. Its side panel is a chat with an AI agent about the
current tab. It is an internal tool, distributed privately.

## 2. Where information goes

- **The native host.** Huginn talks to the Sleipnir native host, a program on the same computer that Chrome starts
  through native messaging. Requests come from that host, and results go back to it.
- **The AI provider you chat with.** A message you send from the side-panel chat goes, with the current tab's title
  and address, to the AI agent you picked (Claude Code or Codex) on the same computer. That agent sends it to its
  provider (Anthropic or OpenAI) under your own account with them, and it can read the tab's content through Huginn
  while it answers. Those providers handle it under their own terms.
- **Websites you act on.** Input Huginn types into a page, and files it uploads into a page, go to that website, as
  they would if you entered them yourself.

We, the publisher, run no server for Huginn and receive no data from it.

## 3. What Huginn reads

When the operator, a local agent or the chat asks for it, Huginn reads, from the tab it is pointed at:

- **Website content:** page text, the accessibility tree, screenshots, PDFs, console messages, network activity,
  and the results of scripts it runs in the page, which can include the page's storage and cookies that scripts
  can read.
- **Web history:** the titles and addresses of open tabs, and the pages a tab navigates to.
- **User activity:** the input Huginn sends to a page, and, when the operator records a session, the clicks and
  keystrokes made during it.
- **Authentication information:** credentials that Huginn types into a sign-in form, and the values of form fields
  it reads, password fields included.
- **Files:** downloads that an action starts, and the files on the computer that the operator or an agent asks it
  to upload.

## 4. What is stored, and where

- **In Chrome's extension storage:** the installation's identity, the tab groups it created and its settings.
- **On the same computer, by the native host:** the installation's grants and records, saved recordings (which keep
  every value entered while recording, passwords and one-time codes included), copies of downloads, screenshots,
  exports and chat recordings, under `~/Documents/Huginn` and Sleipnir's own folder.
- **With the AI agent and its provider:** your chat conversations, under that agent's and that provider's own
  retention.

## 5. Control

- A new installation can do nothing for the command line or an agent until the operator grants it actions. A grant
  can name one action, or a whole kind of action at once (for example every read). An agent session starts only after the
  operator approves it on Huginn's connection page. Actions the operator starts from Huginn's own popup or side
  panel need no grant.
- While Huginn acts in a tab through Chrome's debugger, Chrome normally shows its "started debugging this browser"
  bar. Reads made with Quiet reads turned on do not use the debugger and show no bar.
- Removing the extension from `chrome://extensions` deletes its extension storage. What the native host saved on the
  computer stays until the operator deletes it.

## 6. What we never do

We do not collect, sell or rent any information from Huginn, use it for advertising or lending decisions, or use it
to train AI models.

## 7. Changes and contact

We may change this policy; the updated version will be posted on this page with a new date at the top. Questions:
[aryeh.kiovetsky@evinced.com](mailto:aryeh.kiovetsky@evinced.com).
