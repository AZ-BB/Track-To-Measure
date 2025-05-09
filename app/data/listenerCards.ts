export interface ListenerCardProps {
  title: string;
  description: string;
  slug: string;
  logoPath: string;
  code?: string;
  descriptionMarkdown?: string;
}

export const listenerCards: ListenerCardProps[] = [
  {
    title: "Hubspot Form",
    description: "Trigger your conversion pixels on successful submission of HubSpot forms on your website, using this event listener.",
    slug: "hubspot-form",
    logoPath: "/logos/hubspot.svg",
    code: `<script type="text/javascript">
window.addEventListener("message", function(event) {
if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
window.dataLayer.push({
'event': 'hubspot-form-data',
'hs-form-guid': event.data.id,
'hs-formData': event.data.data
});
}
});
window.addEventListener("message", function(event) {
if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
window.dataLayer.push({
'event': 'hubspot-form-success',
'hs-form-guid': event.data.id
});
}
});
</script>`,
    descriptionMarkdown: `
Enhance your marketing data with this event listener, which makes it easy to listen to successful Hubspot form submissions and track them as conversions in analytics (Google Analytics, Mixpanel, Facebook, Google Ads, etc.) using Google Tag Manager.

To track Hubspot form conversions with Google Tag Manager, all you'll have to do is copy the event listener code and paste it into your custom HTML tag in GTM, trigger it on pageview.

Next, you'll have to navigate to triggers to create a custom event trigger type [hubspot-form-success] which will be used to fire your marketing tags/pixels such as Google Analytics, Facebook Pixels, Mixpanel, Piwik Pro, etc.

Also, ensure your implementation is privacy compliant. Using trigger conditions in Google Tag Manager, you can streamline your conversion to be recorded on certain pages, form IDs or user types.

One thing to note is that an event gets triggered before the Hubspot form is successfully submitted, the event name is [hubspot-form-data].

This event gets all the form field data captured in the form and can be used on the successful form submission event [hubspot-form-success] to enrich your data.
    `
  },
//   {
//     title: "Poptin Popup",
//     description: "Capture user interactions with poptin pop ups and use the data to trigger your desired marketing pixels/tags",
//     slug: "poptin-popup",
//     logoPath: "/images/poptin-logo.jpg",
//     code: `
// <script>
// //when a user is shown a popup
// function poptinVisible(poptin_id){
// window.dataLayer = window.dataLayer || [];
// window.dataLayer.push({
// 'event': 'poptinPopUpEvent',
// 'popupAction': 'popup visible',
// 'poptinID': poptin_id
// });
// };
// //when a user submits a poptin popup form
// function onpoptinSubmit(poptin_id){ 
// window.dataLayer = window.dataLayer || [];
// window.dataLayer.push({
// 'event': 'poptinPopUpEvent',
// 'popupAction': 'popup form submitted',
// 'poptinID': poptin_id
// });
// };
// //when a user closes a poptin popup
// function onpoptinClose(poptin_id){ 
// window.dataLayer = window.dataLayer || [];
// window.dataLayer.push({
// 'event': 'poptinPopUpEvent',
// 'popupAction': 'popup closed',
// 'poptinID': poptin_id
// });
// };
// </script>`,
// descriptionMarkdown: `
// How to track poptin interactions & conversions with google tag manager
// To seamlessly measure user interaction and conversions of Poptin pop-ups on your website.

// Start by creating a new custom HTML tag type in Google Tag Manager, copy the event listener and paste it there, set it to fire on pageview or DOM ready.

// Proceed to variables to create new dataLayer variables for [poptinID] returns the Poptin pop-up ID, and the [popupAction] variable (returns the Poptin event that occurred, these can be pop up visibility, pop up close and form submissions).

// After the creation of these variables, proceed to create your trigger. You can either create a single custom event trigger [poptinPopUpEvent] for all Poptin Popup events or create specific triggers and use conditions to streamline when it should fire the tag with the help of the [popupAction] variables.

// You can now connect your marketing pixels/ tags to this trigger and use the data to make better marketing decisions about your Poptin Pop-up conversion funnel.
// `
//   },
//   {
//     title: "Smartsupp Chat",
//     description: "Use this Smartsupp event listener to measure engagement with the Smartsupp chat widget on your website.",
//     slug: "smartsupp-chat",
//     logoPath: "/images/smartsupp-logo.png",
//     code: 
//     `
// <script>
// smartsupp('on', 'message_sent', function(message) {
// window.dataLayer = window.dataLayer || [];
// window.dataLayer.push({
// 'event': 'SmartsuppChatEvent',
// 'chatAction': 'message sent',
// 'chatBoxID': message.chatId,
// 'visitorID': message.visitorId,
// 'messageID': message.id,
// 'ChatSubType': message.subType,
// 'userLang': navigator.language
// });
// });
// smartsupp('on', 'message_received', function(message) {
// window.dataLayer = window.dataLayer || [];
// window.dataLayer.push({
// 'event': 'SmartsuppChatEvent',
// 'chatAction': 'message received',
// 'chatBoxID': message.chatId,
// 'visitorID': message.visitorId,
// 'messageID': message.id,
// 'ChatSubType': message.subType,
// 'userLang': navigator.language
// });
// });
// </script>
//     `,
//     descriptionMarkdown: `
// How to track Smartsupp Chat Interactions with google tag manager
// Enhance your marketing data with this Smartsupp event listener that automatically pushes Smartupps activity into the dataLayer for use in your analytics.

// To capture this data in Analytics, such as Google Analytics (Universal and GA4), Mixpanel, Piwik Pro, etc. You can use Google Tag manager to make this possible and seamless.

// The first step is to create a new tag in Google Tag Manager, a custom HTML tag type (copy and paste this Smartsupp chat event listener code in this tag), give it a name, and set it to trigger on pageview or DOM ready.

// 💡 Pro Tip: fire on DOM ready if you implemented the Smartsupp chat widget through GTM).

// What this event listener script does, is to listen for Smartsupp events (message sent and message received), then fire a dataLayer event [SmartsuppChatEvent] about the event and its attributes (such as visitorID, chatAction, ChatID, messageID, etc.)

// The next step is to create the variables that you need;
// [chatAction] –> tells you the action type, message sent or received
// [chatBoxID] –> returns the chat widget ID
// [visitorID] –> has the value of the visitor ID in Smartsupp
// [messageID] –> which gives the unique ID of the message
// [ChatSubType] –> returns the chat type, bot, contact, etc.
// [userLang] –> is the language of the user browser

// These variables can help you streamline your trigger with trigger conditions and can also be used to enrich your event data.

// To complete the implementation, create a GTM trigger [SmartsuppChatEvent] which should fire your tag on all Smartsupp events

// 💡 To streamline your trigger in Google Tag Manager, use the variables you created to achieve your needs.
//     `
//   },
  {
    title: "Optin Monster",
    description: "With this event listener, you can easily measure your Optin Monster pop-ups interactions and conversions using GTM.",
    slug: "optin-monster",
    logoPath: "/logos/optinmonster.png",
    code: `
<script>
/* https://optinmonster.com/docs/optinmonster-javascript-events-api/ */
// optinmonster conversion error
document.addEventListener('om.Optin.error', function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'optinmonsterError',
'campaignID': event.detail.Campaign.id,
'campaignName': event.detail.Campaign.name,
'campaignDetail': event.detail.Campaign.type
});
});
//tracking impression and conversion
document.addEventListener('om.Analytics.track', function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': "optinmonster" + event.detail.Analytics.type,
'campaignID': event.detail.Campaign.id,
'campaignName': event.detail.Campaign.name,
'campaignDetail': event.detail.Campaign.type
});
});
// user closes a campaign
document.addEventListener('om.Campaign.close', function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'optinmonsterCampaignClose',
'campaignID': event.detail.Campaign.id,
'campaignName': event.detail.Campaign.name,
'campaignDetail': event.detail.Campaign.type
});
});
</script>
    `
  },
  {
    title: 'Gravity Forms',
    description: 'Use this Gravity Forms event listener to measure form submissions and conversions using GTM.',
    slug: 'gravity-forms',
    logoPath: '/images/gravity-forms-logo.jpg',
    code: `
<script type="text/javascript">
jQuery(document).ready(function() {
jQuery(document).bind("gform_confirmation_loaded", function(event, formID) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "formSubmissionSuccess",
formID: formID
});
});
});
</script>
    `
  },
  {
    title: 'Type Form',
    description: 'Use this Type Form event listener to measure form submissions and conversions using GTM.',
    slug: 'typeform',
    logoPath: '/images/typeform-logo.jpg',
    code: `
<script>
///LISTEN FOR MESSAGE FROM IFRAME TYPEFORM
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Listen to message from child window
eventer(messageEvent,function(e) {
var key = e.message ? "message" : "data";
var data = e[key];

if(data.type == "form-submit"){
console.log("???? Typeform Conversion detected!")
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'typeform_submitted',
'typeFormID': data.formId
});
}

else if (data.type == "form-screen-changed") {
console.log("???? Typeform Step Changed!")
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'typeform_step_change',
'typeFormID': data.formId,
'stepReference': data.ref
});
}

},false);
</script>
    `
  },
  {
    title: 'Mailchimp for Wordpress',
    description: 'Use this Mailchimp for Wordpress event listener to measure form submissions and conversions using GTM.',
    slug: 'mailchimp',
    logoPath: '/images/mailchimp-logo.jpg',
    code: `
<script type="text/javascript">
//fired if form is submitted successfully
mc4wp.forms.on('success', function(form) {
window.dataLayer.push({
"event": "MailchimpFormSuccess",
"formID": form.id,
"formName": form.name
});
});
//fired if form is used to subscribe
mc4wp.forms.on('subscribed', function(form) {
window.dataLayer.push({
"event": "MailchimpFormSubscribed",
"formID": form.id,
"formName": form.name
});
});
//fired if form is submitted with errors
mc4wp.forms.on('error', function(form) {
window.dataLayer.push({
"event": "MailchimpFormError",
"formID": form.id,
"formName": form.name
});
});
//fired if form is used to unsubscribe
mc4wp.forms.on('unsubscribed', function(form) {
window.dataLayer.push({
"event": "MailchimpFormUnsubscribed",
"formID": form.id,
"formName": form.name
});
});
//fired once user starts filling in a form
mc4wp.forms.on('started', function(form) {
window.dataLayer.push({
"event": "MailchimpFormStarted",
"formID": form.id,
"formName": form.name
});
});
</script>
    `
  },
  {
    title: 'Vimeo',
    description: 'Use this Vimeo event listener to measure video interactions and conversions using GTM.',
    slug: 'vimeo',
    logoPath: '/images/vimeo-logo.jpg',
    code: `
<script type="text/javascript" id="gtm-vimeo-tracking">
(function(g, d, k) {
function m() {
var a = n(r("iframe"), t);
a.length && u(function() {
h(a, v)
})
}

function t(a) {
return -1 < a.src.indexOf("player.vimeo.com/video/")
}

function u(a) {
l(d.Vimeo) ? w("https://player.vimeo.com/api/player.js", a) : a()
}

function v(a) {
if (!a.__vimeoTracked) {
a.__vimeoTracked = !0;
var c = new Vimeo.Player(a),
b = k._track.percentages,
e = {
Play: "play",
Pause: "pause",
"Watch to End": "ended"
},
f = {};
c.getVideoTitle().then(function(a) {
h(["Play", "Pause", "Watch to End"], function(b) {
if (k.events[b]) c.on(e[b], function() {
p(b,
a)
})
});
if (b) c.on("timeupdate", function(e) {
e = e.percent;
for (var c in b) e >= b[c] && !f[c] && (f[c] = !0, p(c, a))
})
})
}
}

function x(a) {
a = y({}, {
events: {
Play: !0,
Pause: !0,
"Watch to End": !0
},
percentages: {
each: [],
every: []
}
}, a);
h(["each", "every"], function(b) {
var c = a.percentages[b];
q(c) || (c = [c]);
c && (a.percentages[b] = z(c, Number))
});
var c = [].concat(a.percentages.each);
a.percentages.every && h(a.percentages.every, function(a) {
var b = 100 / a,
e = [],
d;
for (d = 1; d < b; d++) e.push(a * d);
c = c.concat(n(e, function(a) {
return 0 < a && 100 > a
}))
});
var b =
A(c, function(a, b) {
a[b + "%"] = b / 100;
return a
}, {});
a._track = {
percentages: b
};
return a
}

function B(a) {
a = a || {};
var c = a.name || "dataLayer",
b = a.name || d.GoogleAnalyticsObject || "ga",
e = "_gaq",
f = {
gtm: function(a, b) {
g.push({
event: "vimeoTrack",
attributes: {
videoAction: a,
videoName: b
}
})
},
cl: function(a, b) {
d[e].push(["_trackEvent", "Videos", a, b])
},
ua: function(a, c) {
d[b]("send", "event", "Videos", a, c)
}
};
switch (a.type) {
case "gtm":
var g = d[c] = d[c] || [];
break;
case "ua":
d[b] = d[b] || function() {
(d[b].q = d[b].q || []).push(arguments)
};
d[b].l = +new Date;
break;
case "cl":
d[e] = d[e] || [];
break;
default:
l(d[c]) ? b && !l(d[b]) ? a.type = "ua" : l(d[e]) || l(d[e].push) || (a.type = "cl") : (a.type = "gtm", g = d[c] = d[c] || [])
}
return f[a.type]
}

function y() {
var a = [].slice.call(arguments),
c = a.shift(),
b, e;
for (e = 0; e < a.length; e++) {
var d = a[e];
for (b in d) c[b] = d[b]
}
return c
}

function q(a) {
return Array.isArray_ ? Array.isArray_(a) : "[object Array]" === Object.prototype.toString.call(a)
}

function h(a, c) {
if (Array.prototype.forEach_) return a.forEach.call(a, c);
var b;
for (b = 0; b < a.length; b++) c.call(d,
a[b], b, a)
}

function z(a, c) {
if (Array.prototype.map_) return a.map.call(a, c);
var b = [];
h(a, function(a, f, g) {
b.push(c.call(d, a, f, g))
});
return b
}

function n(a, c) {
if (Array.prototype.filter) return a.filter.call(a, c);
var b = [];
h(a, function(a, f, g) {
c.call(d, a, f, g) && b.push(a)
});
return b
}

function A(a, c, b) {
if (Array.prototype.reduce) return a.reduce.call(a, c, b);
var e;
for (e = 0; e < a.length; e++) {
var f = a[e];
b = c.call(d, b, f, a, e)
}
return b
}

function l(a) {
return "undefined" === typeof a
}

function r(a) {
q(a) || (a = [a]);
return [].slice.call(g.querySelectorAll(a.join()))
}

function w(a, c) {
function b() {
c && (c(), f.onload = null)
}
var d = g.getElementsByTagName("script")[0];
var f = g.createElement("script");
f.onload = b;
f.src = a;
f.async = !0;
d.parentNode.insertBefore(f, d)
}
if (!navigator.userAgent.match(/MSIE [678]\./gi)) {
k = x(k);
var p = B(k.syntax);
"loading" !== g.readyState ? m() : g.addEventListener("DOMContentLoaded", m);
g.addEventListener("load", m, !0)
}
})(document, window, {
events: {
Play: !0,
Pause: !0,
"Watch to End": !0
},
percentages: {
every: 25,
each: [10, 90]
}
});
</script>
    `
  },
  
  
  // {
  //   title: "Zopim Chat",
  //   description: "Fire your marketing tags/pixels on specific Zopim chat interactions using this event listener in GTM.",
  //   slug: "zopim-chat",
  //   logoPath: "/images/zopim-logo.jpg"
  // },
  // {
  //   title: "Crisp Chat",
  //   description: "If you're using Crisp chat on your website, you can conveniently track user interactions with your Crisp chat widget.",
  //   slug: "crisp-chat",
  //   logoPath: "/images/crisp-logo.jpg"
  // },
  // {
  //   title: "HubSpot Chat",
  //   description: "Measure how users interact with your Hubspot Chat widget and use the data for better marketing reporting.",
  //   slug: "hubspot-chat",
  //   logoPath: "/images/hubspot-chat-logo.jpg"
  // },
  // {
  //   title: "Ninja Forms",
  //   description: "Enhance your marketing data by measuring Ninja Form submission as conversion using this event listener.",
  //   slug: "ninja-forms",
  //   logoPath: "/images/ninja-forms-logo.jpg"
  // },
  // {
  //   title: "Pure Chat",
  //   description: "Understand how users interact with the Pure chat widget embedded in your website and make better decisions.",
  //   slug: "pure-chat",
  //   logoPath: "/images/pure-chat-logo.jpg"
  // }
]; 