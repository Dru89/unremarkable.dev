---
title: Three Rules for Home Automation
slug: home-automation-rules
date: 2023-03-06T20:54:45-0800
tags: ["home", "automations", "projects"]
---

I like to write automations for things. It could be a little bit of AppleScript,
a Keyboard Maestro Macro, or a Home Assistant automation. I also like "smart
home" stuff: hue lights, thermostats, humidity sensors, you name it. But no
no matter what I'm building or adding, I've set up a few simple rules to keep
from going overboard.

<!-- more -->

There are basically only three rules for any automations or smart appliances in
our house:

1. It needs to _solve_ a problem, not _create_ one.
2. It can't _only_ work by a voice command.
3. It has to work "dumb" as well as "smart".

## Solving Problems

> **Rule #1:** Any smart home devices or home automations can only be added to
> _solve_ existing problems, and not _create_ new problems.

This rule seems like it ought to be simple. Why else would someone get a fancy
new smart thermostat or light bulb or door lock or security system or pet feeder
or… The list of possibilities gets _really_ long, and it's often too easy
for me to look at some new smart _thing_ just go "Oh, that seems cool!" So the
answer to "Why else?" is often just "to tinker" or "it looks fun."

But when it comes to installing new devices, "it looks fun" isn't a great
threshold that things need to reach when other people are forced into the
consequences of my own "fun projects." Especially when it's left in a
half-baked state because I set the first project down in order to pick up the
next one. So I try to make sure that whatever I'm adding will be something
that _improves_ our day-to-day, instead of just adding more clutter. It doesn't
have to be a **huge** improvement, but it should add _something_.

Smart door locks and lights mean that I can turn on the lights and unlock my
door whenever I get home from the grocery store, with the single push of a
button. They also mean that we can get some peace of mind before we go to sleep
because all of the lights are off, the doors are locked, and the security system
is armed. A smart thermostat means that we can automatically turn the
temperature down when we go to bed or while we're away, and slowly bring it back
up while we're waking up, or if it's cold out and we're on our way home from a
trip.

The other trick to note here is the last half of this rule[^1]: "and not create new
problems." This part is probably more self-explanatory than the first, but it's
a helpful reminder to not tinker with things that would mess with the ordinary
flow of the house. If an automation that were meant to play music when I walked
into my office all of a sudden started going off at 3am because my cat set off a
motion detector, that would be an issue. If the low battery reminder on my
cameras sent me 15 push notifications in a 5 minute span, that would be another
issue.

Of course with all of this, there is _some_ space to tinker. In their
"pre-production" phases, I like to make sure that any automations that get built
have a few simple safeguards:

- If they send push notifications, they only go to me at first.

- If they make any kind of noise (e.g. playing music), they do so _very quietly_.
  Probably in my office, which means they won't bother anyone else and I won't
  even hear it if I'm not in there.

- And if they're changing lights or temperature or similar, we start with
  small adjustments to make sure the rules are triggering without huge changes.

I also like to have _really easy_ toggles to turn an automation off if for some
reason it's not working, so that I can go back to designing it later without
immediate interruption.

Honestly, if you're interested in creating home automations and don't follow
_either_ of the other two rules here, make sure you're at least following this
one—especially if other people live with you. (The other rules mostly exist
because of this rule, anyways.) Remember that these projects
require other people in the house to interact with them as well, and they may
not be as interested in your hobby as you are. 😉

## Silence is Golden

> **Rule #2:** Interacting with things via voice is _ok_, but it should not
> be the only method available.

This rule is honestly _really_ simple. I think everyone has either read about
or experienced a home where there's something covering a light switch with a
sign that says "Don't turn off the switch! Just say _Alexa, turn off the right
side end table lamp in the second bedroom_."

No one likes doing that. Even when uttered perfectly, each voice assistant will
fail to understand the command from time to time. And that's only if I managed
to say it correctly. Often, I'll wind up saying something like "Hey Google, uhhh
please turn off the lights in uhh—_what's this room_—the kitchen. Oh wait I
only wanted the one lamp."

Scenes can help with this somewhat. "Hey Siri, TV Time" is a lot easier than
"Hey Siri, turn over the overhead light and dim the lamp to 30%[^2]."

And even if all of the technological stars aligned: the command was uttered
perfectly, the voice assistant interpreted it correctly, and the lights
were set _just right_, sometimes it's just socially awkward. It can easily
be misinterpreted as trying to talk to someone else in the house, or
be an interruption to a conversation.

I will often set up scenes in HomeKit, and those scenes _can_ be addressed
with Siri. And often if my phone is across the room or I'm certain that
my wife won't assume that I'm talking to her, I'll use the voice command.
But there are too many situations at home where a voice command doesn't make
sense to have it be the _only_ way to trigger something, so anything that
we add needs to be easily addressable in some other way.

## Dumb Homes

> **Rule #3** Any "smart" devices that we have in the home should also function
> in a "dumb" way that still works.

Going back to the lightswitch example above, one of the worst things about
the cover over the switch is that lightswitches are _so easy_. Basically
anyone can figure out how to turn the lights on and off with a switch. It
may take a little guesswork to figure out _which_ switch to flip if you're
not sure, but after that you can turn those lights on and off all day[^3]!

To that end, I've tried to make sure that any lights we have in the house
are addressable in multiple ways: from a phone, through a voice command,
and through a switch on the wall. I try to make sure that the most intuitive
way to address a device is still available. For lights, that's a light switch.
For door locks, that means a key hole[^4]. For a security system, it's the
panel. To be fair, sometimes this isn't possible. It may be difficult to create
some kind of "dumb" addressable input for a device. It may not make sense
to have a switch for _every_ lamp in a room (but it might make more sense
to group some lamps under a single switch). This rule should be
followed with a best effort, but isn't always a deal breaker.

In general, I've found the [Lutron Aurora] switch is a great, easy-to-install
switch that you can mount on top of an existing light switch. It works with [Hue]
bulbs and even has built-in dimming. I've also tried the [Click] switch from
[RunLessWire], but found it to be finicky at times. It can be mounted anywhere,
though, and doesn't seem to need any kind of batteries. And finally, for more
general purpose button, I've used a few of [Aqara]'s [Wireless Mini Switches].

---

Building new home automations can be a lot of fun! And I hope to document some
more about the specific projects that I've done in my own house. But I also know
that they can be unstable and a source of annoyance for other people that are
forced to interact with them.

Following these rules has made it a lot easier to introduce small changes into
the house without creating puzzles for my family and friends to solve. I hope
they add something for you to think about when building your own automations.

[^1]: Technically this rule means that the first rule is actually _two_ rules, I guess.
[^2]: Assuming it can even really understand a sentence like that. Addressing _two whole lights_ at the same time? That's impossible!
[^3]: Don't turn your lights on and off all day, please.
[^4]: The only products I've found that fit this are the [Schlage](https://www.schlage.com/en/home/smart-locks/encode-plus.html) series of smart locks.

[aqara]: https://www.aqara.com
[lutron aurora]: https://www.lutron.com/en-US/Products/Pages/StandAloneControls/Dimmers-Switches/SmartBulbDimmer/overview.aspx
[hue]: https://www.philips-hue.com/en-us
[click]: https://runlesswire.com/click-for-philips-hue-wireless-light-switch/
[runlesswire]: https://runlesswire.com/
[wireless mini switches]: https://www.aqara.com/us/wireless_mini_switch.html
