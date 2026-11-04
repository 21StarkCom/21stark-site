---
title: Get started with Huginn Chat
description: What Huginn Chat needs, how to connect it or install it for review, and what Chrome's debugger bar means.
---

Huginn Chat is a Chrome extension with a chat in Chrome's side panel. You talk to an AI agent, Claude Code or Codex,
about the tab you are on, and the agent can read that tab and act in it. Huginn Chat does this work through the
Sleipnir app on your Mac: without the app, the chat cannot start, and the extension's popup says **No host**.

## What you need

- **A Mac.** The Sleipnir app runs on macOS only.
- **Google Chrome**, version 125 or later.
- **The Sleipnir app, with its native host.** The native host is the program Chrome starts to let Huginn Chat talk to
  Sleipnir, through Chrome's native messaging. Sleipnir comes from 21Stark's private Homebrew tap, or from its
  installer package. For access, write to
  [contact@21stark.com](mailto:contact@21stark.com). The installer package for review is public: see
  [Install for review](#install-for-review).
- **Claude Code or Codex, signed in.** The chat runs the agent you pick on your Mac, under your own Anthropic or
  OpenAI account. Install the `claude` or `codex` command and sign in to it once in a terminal.

## Connect it

1. Install Sleipnir: `brew install 21StarkCom/tap/sleipnir`, or open the Sleipnir installer package.
2. Run `slp huginn install` in a terminal. It registers Sleipnir's native host with Chrome on this Mac. The
   installer package runs this step for you.
3. Install Huginn Chat from its Chrome Web Store link, and pin it to the toolbar.
4. Open Huginn Chat from the toolbar. Its header says **Connected** once it reaches the Sleipnir app. If it says
   **No host**, press **Reconnect**; Huginn Chat also tries again every minute.
5. Press **Open chat**, pick Claude Code or Codex, and write your message.

The chat's agent acts on a tab only through the actions you grant this installation. Run `slp huginn list` to see its
installation ID, then grant the actions you want, for example every read:

```sh
slp huginn allow <installation id> 'read:*'
```

## Install for review

To review Huginn Chat, install Sleipnir from its public installer package. The package is signed and notarized by
Apple, and it runs on a Mac with Apple silicon only.

- [Download the Sleipnir installer package for review (PKG, 56 MB)](https://github.com/21StarkCom/21stark-site/releases/download/sleipnir-review-0.78.0/Sleipnir-Review_0.78.0_darwin_arm64.pkg).
  The [sleipnir-review-0.78.0 release](https://github.com/21StarkCom/21stark-site/releases/tag/sleipnir-review-0.78.0)
  also holds its `.sha256` file.
- Its SHA-256 is `dd4166d9b0739da1bc715c7044e3ffa7d304120a15d7e6e083066266bbe3813f`. To check it, run
  `shasum -a 256 ~/Downloads/Sleipnir-Review_0.78.0_darwin_arm64.pkg` in a terminal.

1. Open the package, and finish the installer. It asks for an administrator's password, and it registers Sleipnir's
   native host with Chrome for you.
2. When the installer finishes, it can open a **Set up Huginn** page, `chrome://extensions` and a Finder window. They
   are for Huginn, a different extension. Huginn Chat does not need their steps, so you can close them.
3. Open Chrome, with Huginn Chat installed from its Chrome Web Store item.
4. Open Huginn Chat from the toolbar. Read the data notice and press **I understand**.

Huginn Chat's popup then says **Connected**. Press **Open chat**, and the chat panel opens in Chrome's side panel.

A chat needs your own Claude Code or Codex, installed and signed in on the Mac, as [What you need](#what-you-need)
says. The installer package has no agent account of its own. For a chat that acts on a tab, also grant actions, as
the end of [Connect it](#connect-it) shows. The video in the Chrome Web Store listing shows a chat, and so does the
video in [Watch it work](#watch-it-work).

## Watch it work

This 55-second video shows Huginn Chat connected to the Sleipnir app. It uses a throwaway Chrome profile and W3C's
public "Before and After Demonstration" test pages. The video has no sound.

<video controls preload="metadata" width="1280" height="800" src="/videos/huginn-chat.mp4"></video>

In order, the video shows:

- the data notice, and the **I understand** button;
- **Open chat**, and the start of a chat;
- the agent as it reads the page and clicks a link;
- one script that the agent runs in the page (`evaluate`), and one accessibility check (`audit`);
- the agent's answer, and the script that it ran.

To watch it in another player, [download the Huginn Chat video (MP4, 1.5 MB)](/videos/huginn-chat.mp4).

## Chrome's debugger bar

When the agent reads a page or acts in it, Huginn Chat uses Chrome's Debugger API. While it does, Chrome shows a bar
at the top of the window that says Huginn Chat "started debugging this browser". The bar means that Huginn Chat is
working in a tab of this window, as you or your agent asked. It is not an error. The agent also uses the Debugger API
to run its own scripts in the page.

- To stop it, press **Cancel** on the bar. Chrome removes the bar when Huginn Chat stops using the debugger.
- Reads made with **Quiet reads** turned on do not use the debugger, so they show no bar.

## Your data

What Huginn Chat reads, where it goes and what it keeps are in the
[Huginn Chat privacy policy](/policies/huginn-chat/privacy/). In short: it sends what it reads to the Sleipnir app on
your Mac and to the agent you chat with, which sends it to Anthropic or OpenAI under your own account. It sends
nothing to 21Stark or Evinced.
