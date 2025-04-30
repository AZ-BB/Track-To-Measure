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
    logoPath: "/images/hubspot-logo.png",
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
  {
    title: "Poptin Popup",
    description: "Capture user interactions with poptin pop ups and use the data to trigger your desired marketing pixels/tags",
    slug: "poptin-popup",
    logoPath: "/images/poptin-logo.jpg",
    code: `
<script>
//when a user is shown a popup
function poptinVisible(poptin_id){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'poptinPopUpEvent',
'popupAction': 'popup visible',
'poptinID': poptin_id
});
};
//when a user submits a poptin popup form
function onpoptinSubmit(poptin_id){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'poptinPopUpEvent',
'popupAction': 'popup form submitted',
'poptinID': poptin_id
});
};
//when a user closes a poptin popup
function onpoptinClose(poptin_id){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'poptinPopUpEvent',
'popupAction': 'popup closed',
'poptinID': poptin_id
});
};
</script>`,
descriptionMarkdown: `
How to track poptin interactions & conversions with google tag manager
To seamlessly measure user interaction and conversions of Poptin pop-ups on your website.

Start by creating a new custom HTML tag type in Google Tag Manager, copy the event listener and paste it there, set it to fire on pageview or DOM ready.

Proceed to variables to create new dataLayer variables for [poptinID] returns the Poptin pop-up ID, and the [popupAction] variable (returns the Poptin event that occurred, these can be pop up visibility, pop up close and form submissions).

After the creation of these variables, proceed to create your trigger. You can either create a single custom event trigger [poptinPopUpEvent] for all Poptin Popup events or create specific triggers and use conditions to streamline when it should fire the tag with the help of the [popupAction] variables.

You can now connect your marketing pixels/ tags to this trigger and use the data to make better marketing decisions about your Poptin Pop-up conversion funnel.
`
  },
  {
    title: "Smartsupp Chat",
    description: "Use this Smartsupp event listener to measure engagement with the Smartsupp chat widget on your website.",
    slug: "smartsupp-chat",
    logoPath: "/images/smartsupp-logo.png",
    code: 
    `
<script>
smartsupp('on', 'message_sent', function(message) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'SmartsuppChatEvent',
'chatAction': 'message sent',
'chatBoxID': message.chatId,
'visitorID': message.visitorId,
'messageID': message.id,
'ChatSubType': message.subType,
'userLang': navigator.language
});
});
smartsupp('on', 'message_received', function(message) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'SmartsuppChatEvent',
'chatAction': 'message received',
'chatBoxID': message.chatId,
'visitorID': message.visitorId,
'messageID': message.id,
'ChatSubType': message.subType,
'userLang': navigator.language
});
});
</script>
    `,
    descriptionMarkdown: `
How to track Smartsupp Chat Interactions with google tag manager
Enhance your marketing data with this Smartsupp event listener that automatically pushes Smartupps activity into the dataLayer for use in your analytics.

To capture this data in Analytics, such as Google Analytics (Universal and GA4), Mixpanel, Piwik Pro, etc. You can use Google Tag manager to make this possible and seamless.

The first step is to create a new tag in Google Tag Manager, a custom HTML tag type (copy and paste this Smartsupp chat event listener code in this tag), give it a name, and set it to trigger on pageview or DOM ready.

💡 Pro Tip: fire on DOM ready if you implemented the Smartsupp chat widget through GTM).

What this event listener script does, is to listen for Smartsupp events (message sent and message received), then fire a dataLayer event [SmartsuppChatEvent] about the event and its attributes (such as visitorID, chatAction, ChatID, messageID, etc.)

The next step is to create the variables that you need;
[chatAction] –> tells you the action type, message sent or received
[chatBoxID] –> returns the chat widget ID
[visitorID] –> has the value of the visitor ID in Smartsupp
[messageID] –> which gives the unique ID of the message
[ChatSubType] –> returns the chat type, bot, contact, etc.
[userLang] –> is the language of the user browser

These variables can help you streamline your trigger with trigger conditions and can also be used to enrich your event data.

To complete the implementation, create a GTM trigger [SmartsuppChatEvent] which should fire your tag on all Smartsupp events

💡 To streamline your trigger in Google Tag Manager, use the variables you created to achieve your needs.
    `
  },
  // {
  //   title: "Optin Monster",
  //   description: "With this event listener, you can easily measure your Optin Monster pop-ups interactions and conversions using GTM.",
  //   slug: "optin-monster",
  //   logoPath: "/images/optinmonster-logo.jpg"
  // },
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