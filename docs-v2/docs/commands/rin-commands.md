---
title: Commands
sidebar_position: 2
---

# Commands

---

## `.rinhelp`

Provides a list of commands that can be used

**Parameters**: None (optional). Sections can be accessed by typing `.rinhelp [section]`. The section names are displayed on the rinhelp homepage page.

## `.rininfo`

Provides basic info for what the bot does.

**Parameters**: None

## `.valid`

Provides some support... This is meant to say you're valid.

**Parameters**: name (usually a name goes better with this)

## `.ping`

Pings the bot to obtain lag in ms.

**Parameters**: None

## `.meme`

Performs a search on memes on reddit. Picks from a certain list of words + meme.

**Parameters**: None

## `.transmeme`

Find trans-related memes

**Parameters**: None

## `.reddit`

Performs a search on reddit.

**Parameters**: keyword/subreddit - For subreddit, include the "r/" prefix as well


## `.botinfo`

Shows Bot info.

**Parameters**: None

## `.translate`

Translates a string or message.

**Parameters**: None. Requires input after running cmd.

## `.botgrowth`

Shows tips on how to grow your server with a bot.

**Parameters**: None

## `.prune`

Prunes any spare servers that the bot is not used in. This is an admin command.

**Parameters**: None

## `.broadcast`

Performs a broadcast using the Global chat system. Use with caution.

**Parameters**: None. Requires input after running the cmd.

## `.rtupdatestatus`

Updates the status of the Twitter User.

**Parameters**:

- update message - The message you want to send to update the status on your twitter account.

## `.rtsearch`

Performs a search on Twitter.

**Parameters**:

- keyword - Used to determine the search

## `.pinger`

Pings everyone on the server with a message

**Parameters**: None

## `.iguserinfo`

Finds and extracts user info for that account

**Parameters**: *Client ID of the user

*Note: In order to find the Client ID, you will need to use [this](https://codeofaninja.com/tools/find-instagram-user-id/) website, and input the username you want. Then the number is labeled under "profilePage".

## `.igusersearch`

Finds users with that username. Will only show the first result of each search.

**Parameters**: The user you are searching for

## `.igtaginfo`

Extracts info about the tag

**Parameters**: The tag that you want to search for

## `.igusernamecheck`

Checks if the Instagram username is taken or not

**Parameters**: The username that you want to check

## `.iguserfeed`

Shows the first post of the selected user's profile feed

**Parameters**: Client ID (Requires Client ID in order to work)

## `.jisho`

Searches up Japanese terms and words along with the English meaning. Uses [Jisho](https://jisho.org/) in order to fetch the data. (Uses the API in order to do so) and JMDict to process the kanji, hiragana, and katakana

**Parameters**: The term that you want to search for. Can be in both Japanese and English

## `.serverinfo`

Shows server info

**Parameters**: None

## `.clear`

Clears number of messages specified from the channel that the command was called in

**Parameters**: The number of messages to clear (int)

## `.javamcsrv`

Alias - `.java`

Provides info about a minecraft server (java) of your choice

**Parameters**: The server's domain name

## `.bedrockmcsrv`

Alias - `.bedrock`

Provides info about a minecraft server (bedrock) of your choice

**Parameters**: The server's domain name

## `.waifu`

Randomly selects a waifu for you

**Parameters**: None

## `.waifupics`

Alias - `.wp`

Randomly gives you a waifu using WaifuPic's API

**Parameters**: None

## `.advice`

Returns some advice from Advice Slip

**Parameters**: None

## `.spiget-search`

Searches for Spigot resources and returns info regarding the resource info given

**Parameters**: What plugin you wish to search. Make sure this is the same name as what is in the title of the actual plugin. For example, if I wanted to search for `FAWE`, I would put `Fast Async WorldEdit` instead

## `.spiget-stats`

Returns stats for Spiget

**Parameters**: None

## `.spiget-status`

Returns HTTP status of the Spiget API

**Parameters**: None

## `.hypixel`

Gain Insight in Hypixel's player data

**Parameters**: UUID of the player

## `.hypixelcount`

Obtains the amount of players online within the servers

**Parameters**: None

## `.hypixelplayerstatus`

Determines if the player is online or offline

**Parameters**: UUID of the player

## `.skywarsinfo`

Get the position and score of the player within **ranked** skywars

**Parameters**: UUID of the player

## `.jikan-anime`

Alias - `.jk-anime`

Searches on Jikan/MAL and provides info about the given anime

**Parameters**: keyword - The anime that you wish to search for

## `.jikan-manga`

Alias - `.jk-manga`

Searches on Jikan/MAL and provides info about the given manga

**Parameters**: keyword - The manga that you wish to search for

## `.jikan-top`

Alias - `.jk-top`

Returns the top 10 items on Jikan/MAL

**Parameters**: keyword - `anime`, `manga`, `character`, or `people`

## `.jikan-season`

Alias - `.jk-season`

Returns 5 animes within those given years and seasons

**Parameters**: keyword - Year and Season. For example, `2018 winter`

## `.jikan-season-later`

Alias - `.jk-season-later`

Returns 5 animes that are already planned for viewing in the future

**Parameters**: None

## `.nb-pride`

Sends a non-binary flag and a trans flag into the channel

**Parameters**: None

## `.topgg-search`

Searches for a bot and returns info about the given bot

**Parameters**: keyword - The bot's ID

## `.topgg-search-user`

Returns info on a user from Top.gg

**Parameters**: keyword - The User's ID

## `.deviantart-item`

Alias - `.da-item`

Returns info about given Deviation.

**Parameters**: Deviantion UUID

## `.deviantart-newest`

Alias - `.da-newest`

Returns 5 newest deviations given the category

**Parameters**: Category to search. (eg nature, etc)

## `.deviantart-popular`

Alias - `.da-popular`

Returns 5 popular deviations given the category

**Parameters**: Category to search

## `.deviantart-user`

Alias - `.da-user`

Returns info about the given user

**Parameter**: User to search

## `.deviantart-tag-search`

Alias - `.da-tag-search`

Searches for a tag and returns info on it

**Paramter**: Tag to search

## `.pinterest-pin`

Alias - `.pt-pin`

Returns info about the pin that the user logged on has

**Parameter**: Pin ID

## `.pinterest-board`

Alias - `.pt-board`

Returns info about the board that the user logged on has

**Parameter**: Board ID

## `.pinterest-user`

Alias - `.pt-user`

Returns info about the user that is logged on

**Parameter**: None

## `.mylvl`

Returns the current level for the DisQuest cog

**Parameters**: None

## `.globalrank`

Alias - `.grank`

Returns the global rank of the player for the DisQuest cog

**Parameters**: None

## `.rank`

Returns the current rank of the user within the server for the DisQuest cog

**Parameters**: None