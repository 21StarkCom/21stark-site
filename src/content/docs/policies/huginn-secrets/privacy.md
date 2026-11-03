---
title: Sleipnir Huginn Secrets — Privacy Policy
description: How the Sleipnir Huginn Secrets Chrome extension handles information.
---

_Last updated: November 3, 2026_

## 1. What Huginn Secrets is

Sleipnir Huginn Secrets ("Secrets") is a Chrome extension that fills sign-in forms and authenticator codes from
Mímir, a password vault on the same computer, and saves new sign-ins to it. It also signs in with a link or a code
sent by email, and makes and manages access tokens on GitHub, Zoom, Slack and NordPass. It is an internal tool,
distributed privately.

## 2. Where information goes

- **The native host.** Secrets talks to its native host, a program on the same computer that Chrome starts through
  native messaging, which reads and writes the Mímir vault on that computer. The values Secrets fills, and the
  sign-ins and tokens it saves, cross only this connection.
- **Gmail, for email sign-in.** When you connect a Gmail inbox, Secrets gets a Google access token with the
  `gmail.modify` scope. An email sign-in then searches that inbox for the sign-in mail, reads it whole, and moves the
  mail it used to Trash; it never deletes a mail. The token goes only to Gmail. The mail, its link and its code stay
  in the extension's memory and never reach the native host.
- **GitHub, Zoom, Slack and NordPass, for vendor actions.** When you or a local tool ask for a vendor token action,
  Secrets opens that vendor's own pages in a background tab and calls its site and API there, with your signed-in
  session, to list, make, change, renew or revoke a token. A new token goes once to the native host, which writes it
  to the vault, and to that vendor's own API to check it.
- **Websites you sign in to.** The usernames, passwords and codes Secrets fills go to that website, as they would if
  you typed them.

We, the publisher, run no server for Secrets and receive no data from it.

## 3. What Secrets reads and writes

- **Authentication information:** usernames, passwords and authenticator codes from the vault, which it types into
  the sign-in form you are on, and the sign-ins you choose to save, which it reads from that form and passes to the
  vault.
- **Website content and addresses:** the sign-in forms on a page, and the page's address, to match it with the
  right vault item.
- **Email:** the sign-in mails it finds in a connected Gmail inbox, to take the sign-in link or code from them.
- **Vendor tokens:** the tokens it makes, renews or revokes on GitHub, Zoom, Slack and NordPass, read from the
  vendor's page once and passed to the vault.
- **Cookies:** before an email sign-in, it deletes every cookie of the domains that the vault item names in its
  `sign-in-sign-out` field, which signs Chrome out of those sites. It reads those cookies only to delete them.

Vault access needs the vault to be unlocked on that computer, and filling or saving happens only when you or the
local operator ask for it.

## 4. What Secrets stores

Its installation identity and settings, in Chrome's extension storage on the same computer, and each connected
inbox's Google access token, in Chrome's session storage for the extension, which Chrome clears when it quits.
Passwords, codes and vendor tokens are kept only in the vault, never in the extension.

## 5. What we never do

We do not collect, sell, rent or share any information from Secrets, use it for advertising or lending decisions, or
use it to train AI models.

## 6. Changes and contact

We may change this policy; the updated version will be posted on this page with a new date at the top. Questions:
[aryeh.kiovetsky@evinced.com](mailto:aryeh.kiovetsky@evinced.com).
