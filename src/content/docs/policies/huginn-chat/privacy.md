---
title: Huginn Chat — Privacy Policy
description: How the Huginn Chat Chrome extension handles information.
---

_Last updated: November 3, 2026_

## 1. What Huginn Chat is

Huginn Chat is a Chrome extension: Sleipnir Huginn's extension under a new name, built for the Chrome Web Store. It
is distributed through the Chrome Web Store as an Unlisted item, so it does not appear in the store's search and only
people who have its link can install it.

Its side panel is a chat with an AI agent about the current tab. The agent, Claude Code or Codex, runs on the same
computer under the person's own account. Through Huginn Chat, that agent, the Sleipnir command-line tool, and other AI
agents the person runs on the same computer can read and act on tabs in the Chrome profile it is installed in, and in
that profile's incognito windows when "Allow in Incognito" is turned on. It can list tabs, read a page's text and
accessibility tree, take screenshots and PDFs, click, type, scroll, navigate, upload files into a page, track
downloads, run scripts in a page, and run accessibility audits.

Huginn Chat needs the Sleipnir app on the same Mac. The [Huginn Chat get-started guide](/guides/huginn-chat/) says
how to connect it.

## 2. What Huginn Chat reads

When the person, the chat's agent or another local tool asks for it, Huginn Chat reads, from the tab it is pointed
at:

- **Tab titles and URLs:** the titles and addresses of open tabs, and the pages a tab navigates to. An address is
  kept whole, with its query, its fragment and any credentials written in it.
- **Page text and the accessibility tree:** a page's text, its structure as assistive technology reads it, its
  console messages, and the results of scripts run in the page, which can include the page's storage and the cookies
  that scripts can read.
- **Screenshots and PDFs** of a tab.
- **Form values that an agent reads, passwords included:** Huginn Chat does not redact form values. It reads the value
  of any form field, password, one-time code and card fields included, and types into any field, a sign-in form's
  password field included.
- **Chat messages and attached files:** the messages the person writes in the side panel, the files they attach,
  paste or drop there, and, with each message, the current tab's title and address.
- **Downloads that an agent starts:** the downloaded file, its name and its address.
- **Network requests, while the person records in the Network pane:** for the recorded tab and the tabs it opens,
  each request's method, address, query, request and response headers, cookies, status, content type, redirect
  target, timings, server IP address, type, initiator and error. Every token, key, password, cookie value and email
  address in an address or a header is masked before it leaves the recording; other personal data is not. For a
  failed request (status 400 or more) made by the page's own `fetch` or `XMLHttpRequest`, it also keeps the text of
  the response body, at most 4,096 bytes, masked the same way. A recording asks Chrome for the `cookies` permission
  when it starts and gives it back when it stops. It records no incognito tab and stops by itself at its time limit
  (15 minutes by default).
- **User activity:** the input Huginn Chat sends to a page, and, when the person records a session, the clicks and
  keystrokes made during it.
- **Files to upload:** the files on the computer that the person or an agent asks it to upload into a page.

## 3. Where information goes

- **The Sleipnir app on the same computer.** Huginn Chat talks to the Sleipnir app's native host, a program on the
  same computer that Chrome starts through Chrome's native messaging. Requests come from that host, and everything
  Huginn Chat reads goes back to it. The host starts the chat's agent and hands it each message and attached file.
- **The chat's agent, under the person's own account.** A chat message, its attached files, and the current tab's
  title and address go to the agent the person picked: Claude Code sends them to Anthropic, and Codex sends them to
  OpenAI, under the person's own account with that provider. While it answers, the agent reads the tab through Huginn
  Chat, and what it reads goes the same way. Those providers handle it under their own terms.
- **Websites the agent acts on.** Input typed into a page, and files uploaded into a page, go to that website, as
  they would if the person entered them.
- **No 21Stark or Evinced server.** We, the publisher, run no server for Huginn Chat and receive no data from it.
  The only `fetch` in Huginn Chat's code reads a file from its own package.

## 4. Scripts in a page

The chat's agent and other local tools can run their own scripts in a page through Chrome's Debugger API. These
scripts come from the agent at the time it asks, not from Huginn Chat's package. They read the page or act in it, and
their results go back to the Sleipnir app on the same computer, as section 3 says. While Huginn Chat uses the
debugger in a tab, Chrome normally shows its "started debugging this browser" bar. Reads made with Quiet reads turned
on do not use the debugger and show no bar.

## 5. What is stored, where, and for how long

- **In Chrome's extension storage:** the installation's identity, the tab groups it created and its settings.
  Removing the extension from `chrome://extensions` deletes them.
- **On the same computer, by the Sleipnir app:** the installation's grants and records; each chat's messages, its
  attached files and the agent's own record of the session; saved recordings, which keep every value entered while
  recording, passwords and one-time codes included; and copies of downloads, screenshots, network recordings, exports
  and chat recordings. They are kept under `~/Documents/Huginn` and Sleipnir's own folder until the person deletes
  them. Deleting a chat in the side panel deletes its messages, its files and the agent's record of it on the
  computer.
- **With the chat's agent and its provider:** chat conversations, under that agent's and that provider's own
  retention.
- **With us:** nothing. Huginn Chat sends us no data, so we store none.

## 6. Control

- A new installation can do nothing for the command line or an agent until the person grants it actions. A grant can
  name one action, or a whole kind of action at once (for example every read). The chat's agent acts on a tab only
  through those grants. Actions the person starts from Huginn Chat's own popup or side panel need no grant.
- The person can stop the agent's turn, end a chat, or delete it from the side panel at any time.
- What the Sleipnir app saved on the computer stays until the person deletes it.

## 7. Chrome Web Store Limited Use

The use of information received from Google APIs will adhere to the
[Chrome Web Store User Data Policy](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq),
including the [Limited Use](https://developer.chrome.com/docs/webstore/program-policies/limited-use) requirements.

Huginn Chat collects, uses and transmits user data only to provide its single purpose: a chat with the person's own
AI agent that reads and acts on their browser tabs. We do not sell user data, transfer it to anyone except as section
3 describes, use it for advertising, use it to determine creditworthiness or for lending, or use it to train AI
models. No person at 21Stark or Evinced reads it.

## 8. Changes and contact

We may change this policy; the updated version will be posted on this page with a new date at the top. Questions:
[aryeh.kiovetsky@evinced.com](mailto:aryeh.kiovetsky@evinced.com).
