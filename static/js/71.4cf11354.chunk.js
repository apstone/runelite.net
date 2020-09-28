(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[71],{705:function(e,n){e.exports={title:"1.5.1 Release",description:"Linux support for GPU plugin, CTRL-V paste on login screen, combat tooltips",author:"Adam",body:'<p>Thanks to the hard work of <a href="https://github.com/whitehooder" native="">@whitehooder</a> and <a href="https://github.com/deathbeam" native="">@deathbeam</a>\nthe GPU plugin now also supports Linux machines. The requirements are still the same, mesa with\nat least GL 4.3+ support is required. Here is small table of\n<a href="https://people.freedesktop.org/~imirkin/glxinfo/#diff&amp;v=Mesa%2017.2.0" native="">Mesa 17.2.0 GL support</a>.\nWe are aware that on some graphic cards mesa can only support GL 4.2 even though all required features\nthat we use are supported, and we plan to look into that in future.</p>\n<p>Thanks to <a href="https://github.com/bmiddle" native="">@bmiddle</a> Combat Level plugin now displays a tooltip for levels required\nto reach the next combat level in Attack Style interface.</p>\n<p><img src="/img/blog/1.5.1-Release/combat1.png" alt="combat1">\n<img src="/img/blog/1.5.1-Release/combat2.png" alt="combat2"></p>\n<p>Thanks to <a href="https://github.com/deathbeam" native="">@deathbeam</a> you can now paste your username and password to\nlogin screen with CTRL-V. This option needs to be explicitly enabled in Login Screen plugin.</p>\n<p>GPU fixes for this week:</p>\n<ul>\n<li>Add support for Stretched Mode</li>\n<li>Fix tiles having black outlines on Intel HD Graphics with drivers newer than 20.19</li>\n<li>Fix relying on some undefined behavior causing some AMD cards to not work corectly</li>\n<li>Fix visible lag from resizing the client or when expanding/contracting the side panel</li>\n<li>Fix resource leaks from shutting down the GPU plugin</li>\n<li>More consistently limit interaction with far away objects</li>\n</ul>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>Fix smoke rune level requirement in skill calc</li>\n<li>Show ironman icons when chat is locked with the WASD plugin</li>\n<li>Add new POH teleport icons to minimap</li>\n<li>Fix hiding attack styles after autocast selection</li>\n<li>Make Skotizo interface layoutable</li>\n<li>Fix some boulders at Maniacal Monkeys not working with the hunter plugin</li>\n<li>Add kills left to XP orbs</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 17 contributors this release!</p>\n<pre><code>Adam (4):\n      gpu: destroy glcontext on shutdown\n      gpu: don\'t compute scene if the scene buffer isn\'t filled yet\n      gpu: correct uniform block name in geometry shader\n      mixins: remove extended visiblity maps\n\nBrett (1):\n      Add tooltip to show levels required for next combat level (#5764)\n\nDennis (1):\n      gpu: add sin/cos table to UBO\n\nDevinMadsen (1):\n      Fix smoke rune level requirement in skill calc (#6565)\n\nHydrox6 (1):\n      wasdplugin: Show Ironman Icons when chat is locked (#6347)\n\nJack Sheehan (1):\n      Add new POH teleport icons to minimap (#6502)\n\nJordan Atwood (1):\n      attack styles: Fix style hiding after autocast selection\n\nLotto (4):\n      puzzlesolver: wait a duration before recomputing the solution\n      gpu: limit interaction distance from camera\n      gpu: add frame and render buffer utils\n      gpu: add stretched mode support\n\nMagic fTail (1):\n      Add abyssal sire resp systems to npc_health\n\nMax Weber (3):\n      ScriptVM: Catch exceptions thrown from a JavaScriptCallback\n      ChatboxTextInput: Properly escape carrots\n      runelite-client: Make Skotizo widget layoutable\n\nMaxBartlett (1):\n      Fix distance check for maniacal monkey boulders (#6399)\n\nSlevender (1):\n      Remove non-existant fairy ring location BJQ (#6518)\n\nSteffen Hauge (1):\n      Add support for kills left in xp orbs\n\nTomas Slusny (9):\n      Switch to core profile in GPU plugin\n      Expose current login field and password setter\n      Add support for Ctrl-V pasting on login screen\n      Fix JOGL context debug logging flag\n      Properly destroy JAWT window on plugin shutdown\n      Unlock surface only with X11JAWTWindow\n      Make sidebar icon consistent without custom chrome\n      Properly null-check chat performance widgets\n      Null-check GL and window on plugin shutdown\n\nWhitehooder (1):\n      Fix GPU rendering on Linux\n\ndrivfe (1):\n      Fix some xp values in skill_smithing.json\n\nforsco (1):\n      Fix indentation of npc_health json (#6616)\n</code></pre>\n'}}}]);
//# sourceMappingURL=71.4cf11354.chunk.js.map