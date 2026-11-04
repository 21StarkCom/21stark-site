---
title: Get started with Huginn Chat
description: What Huginn Chat needs, how to connect it, and what Chrome's debugger bar means.
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
  [contact@21stark.com](mailto:contact@21stark.com).
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
