export interface ListenerCardProps {
	title: string;
	description: string;
	slug: string;
	logoPath: string;
	code?: string;
	descriptionMarkdown?: string;
	listDescription?: string;
}

export const listenerCardsChat: ListenerCardProps[] = [
	{
		title: 'Hubspot Live Chat',
		description: `
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Hubspot Live Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measuring how users interact with your Hubspot live chat widget is easy and seamless using this Hubspot chat event listener and Google Tag Manager.</span></p>
<p><span data-preserver-spaces="true">To track these interactions, start by creating a custom HTML tag in GTM, copy and paste this event listener code in that tag and trigger it on all pageview or DOM Ready (Recommended)</span></p>
<p><span data-preserver-spaces="true">💡&nbsp;</span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;fire on DOM ready if you implemented the Crisp chat widget through GTM).</span></p>
<p><span data-preserver-spaces="true">Your next step is to create two custom event triggers with event names;</span></p>
<p><strong><span data-preserver-spaces="true">[conversationBegan]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; when user starts a conversation</span></p>
<p><strong><span data-preserver-spaces="true">[conversationClosed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; when a user ends a conversation</span></p>
<p><span data-preserver-spaces="true">These data make it possible to analyze the impact of the live chat on your user experience, business funnels, conversions and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">You can connect your marketing tags to the appropriate triggers, and BOOM! you are now tracking this event and sending the data where you need it. (Always remember to DEBUG!!!)</span></p>
<p>&nbsp;</p>
<p><strong>🏆 Credit: Hubspot Created the code framework, which can be <a href="https://developers.hubspot.com/docs/api/conversation/chat-widget-sdk" target="_blank" rel="noopener">found here</a></strong></p>
								</div>
				</div>
					</div>
		</div>
    `,
		slug: 'hubspot-live-chat',
		logoPath: '/logos/hubspot.jpg',
		code: `
    <script type="text/javascript">
function onConversationsAPIReady() {
window.HubSpotConversations.on("conversationStarted", function() {
dataLayer.push({
event: "conversationBegan"
});
});

window.HubSpotConversations.on("conversationClosed", function() {
dataLayer.push({
event: "conversationClosed"
});
});

}
window.HubSpotConversations ? onConversationsAPIReady() : (window.hsConversationsOnReady = window.hsConversationsOnReady || [], window.hsConversationsOnReady.push(onConversationsAPIReady));
</script>
    `,
		listDescription: `
    Measure how users interact with your Hubspot Chat widget and use the data for better marketing reporting.`
	},
	{
		title: 'Helpcrunch Chat',
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Hubspot Live Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measuring how users interact with your Hubspot live chat widget is easy and seamless using this Hubspot chat event listener and Google Tag Manager.</span></p>
<p><span data-preserver-spaces="true">To track these interactions, start by creating a custom HTML tag in GTM, copy and paste this event listener code in that tag and trigger it on all pageview or DOM Ready (Recommended)</span></p>
<p><span data-preserver-spaces="true">💡&nbsp;</span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;fire on DOM ready if you implemented the Crisp chat widget through GTM).</span></p>
<p><span data-preserver-spaces="true">Your next step is to create two custom event triggers with event names;</span></p>
<p><strong><span data-preserver-spaces="true">[conversationBegan]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; when user starts a conversation</span></p>
<p><strong><span data-preserver-spaces="true">[conversationClosed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; when a user ends a conversation</span></p>
<p><span data-preserver-spaces="true">These data make it possible to analyze the impact of the live chat on your user experience, business funnels, conversions and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">You can connect your marketing tags to the appropriate triggers, and BOOM! you are now tracking this event and sending the data where you need it. (Always remember to DEBUG!!!)</span></p>
<p>&nbsp;</p>
<p><strong>🏆 Credit: Hubspot Created the code framework, which can be <a href="https://developers.hubspot.com/docs/api/conversation/chat-widget-sdk" target="_blank" rel="noopener">found here</a></strong></p>
								</div>
				</div>
					</div> `,
		slug: 'helpcrunch-chat',
		logoPath: '/logos/helpcrunch-logo.jpg',
		code: `
    <script>
//Track when your customer sends a message in chat 
HelpCrunch('onCustomerMessage', function (event) {
window.dataLayer.push({
"event": "helpcrunch_chat_action",
"ChatAction": "Visitor Sent Message",
"ChatEventDetail": event,
"chatMessage": event.detail.message.text,
"chatMessageContent": event.detail.message.content,
"chatOperator": event.detail.message.author_name,
"chatUserID": event.detail.message.cid
}); 
});
//Track when your customer opens the chat 
HelpCrunch('onChatOpen', function () {
window.dataLayer.push({
"event": "helpcrunch_chat_action",
"ChatAction": "Opened Chat Widget"
}); 
});
//Track when your customer closes the chat 
HelpCrunch('onChatClose', function () {
window.dataLayer.push({
"event": "helpcrunch_chat_action",
"ChatAction": "Closed Chat Widget"
}); 
});
//Track when your agents sends a message in chat 
HelpCrunch('onAgentMessage', function (event) {
window.dataLayer.push({
"event": "helpcrunch_chat_action",
"ChatAction": "Agent Sent Message",
"chatMessageContent": event.detail.message.content,
"chatMessage": event.detail.message.text,
"chatOperator": event.detail.message.author_name,
"chatUserID": event.detail.message.cid
}); 
});
</script>
    `,
		listDescription: `
    Enhance your marketing data by tracking how users interact with your embedded Helpcrunch chat widget.`
	},
	{
		title: 'Tawk. To Chat',
		listDescription: `Track Tawk. To chat engagements and enhance your marketing data for making better decisions.`,
		description: `
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Tawk.to Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Tawk.to chat interactions in your analytics tools give you valuable insights into the impact these chat interactions have on your marketing funnel, conversions, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Tawk.to chat activity tracking, you’ll need Google Tag Manager and the Olark chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Tawk.to chat script through Google Tag Manager, please use the DOM ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">What the Tawk chat event listener does, is to fire an event on every interaction with the Tawk chat widget.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[tawkto_Interactions]</span></strong><span data-preserver-spaces="true">, which gets fired on all chat activity</span></p>
<p><span data-preserver-spaces="true">To get more information on what chat activity happened, you’ll need to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatInteraction]</span></strong></p>
<p><strong><span data-preserver-spaces="true">[chatInteraction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">chat conversation started</span></li>
<li><span data-preserver-spaces="true">chat ended by user</span></li>
<li><span data-preserver-spaces="true">prechat form submitted</span></li>
<li><span data-preserver-spaces="true">offline form submitted</span></li>
<li><span data-preserver-spaces="true">Tawk.to chat widget minimized</span></li>
<li><span data-preserver-spaces="true">Tawk.to chat widget maximized</span></li>
<li><span data-preserver-spaces="true">message is sent by the visitor</span></li>
<li><span data-preserver-spaces="true">message is sent by the agent</span></li>
<li><span data-preserver-spaces="true">message is sent by the system</span></li>
<li><span data-preserver-spaces="true">chat experience rate</span></li>
<li><span data-preserver-spaces="true">file uploaded by visitor</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatInteraction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Tawk.to chat interactions.</span></p>
<p><span data-preserver-spaces="true">Also, you can create the following dataLayer keys to capture chat session ID and chat widget ID;</span></p>
<p><strong><span data-preserver-spaces="true">[chatSessionId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the chat sessio ID</span></p>
<p><strong><span data-preserver-spaces="true">[chatWidgetID]</span></strong><span data-preserver-spaces="true"> –&gt; returns the widget ID</span></p>
<p><span data-preserver-spaces="true">To push the chat activity data to your analytics, you’ll have to create the appropriate tags, connect your trigger and use the dataLayer variables you created to push more information about each Tawk.to chat interaction.</span></p>
<p>&nbsp;</p>
<p><strong>🏆 Credit: This event listener was created by <a href="https://lucidgen.com/en/how-to-track-tawk-to-conversion/" target="_blank" rel="noopener">Lucidgen</a>, with little modifications done by the DumbData team</strong></p>
								</div>
				</div>
					</div>
		</div>
    `,
		code: `
    <script>
Tawk_API = Tawk_API || {};
var dlpush = function(a) {
dataLayer.push({
event: "tawkto_Interactions",
chatInteraction: a,
chatSessionId: Tawk_Window.sessionManager.sessionInformation,
chatWidgetID: $_Tawk_WidgetId
})
};
Tawk_API.onChatStarted = function() {
dlpush("chat conversation started")
};
Tawk_API.onChatEnded = function() {
dlpush("chat ended by user")
};
Tawk_API.onPrechatSubmit = function(a) {
dlpush("prechat form submitted")
};
Tawk_API.onOfflineSubmit = function(a) {
dlpush("offline form submitted")
};
Tawk_API.onChatMinimized = function(a) {
dlpush("Tawk.to chat widget minimized")
};
Tawk_API.onChatMaximized = function(a) {
dlpush("Tawk.to chat widget maximized")
};
Tawk_API.onChatMessageVisitor = function(a) {
dlpush("message is sent by the visitor")
};
Tawk_API.onChatMessageAgent = function(a) {
dlpush("message is sent by the agent")
};
Tawk_API.onChatMessageSystem = function(a) {
dlpush("message is sent by the system")
};
Tawk_API.onChatSatisfaction = function(a) {
dlpush("chat experience rate")
};
Tawk_API.onFileUpload = function(a) {
dlpush("file uploaded by visitor")
};
</script>
    `,
		slug: 'tawk-to-chat',
		logoPath: '/logos/tawk-to.jpg'
	},
	{
		title: 'Helpscout',
		description: `
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Helpscout Chat interaction with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Enrich your marketing data, by tracking Helpscout chat interactions in your analytics stacks.</span></p>
<p><span data-preserver-spaces="true">Doing this gives you valuable insights into what impact these interactions, have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">For your implementation, you’ll need Google Tag Manager and the Helpscout chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">start by pasting the event listener script in the GTM custom HTML tag and firing it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the Helpscout chat script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[Helpscout_Interaction]</span></strong><span data-preserver-spaces="true">, (this event happens on all Helpscout interactions)&nbsp;</span></p>
<p><span data-preserver-spaces="true">To determine the actual event, you’ll have to create dataLayer variables.</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">Opened Helpscout Chat Widget</span></li>
<li><span data-preserver-spaces="true">Closed Helpscout Chat Widget</span></li>
<li><span data-preserver-spaces="true">Viewed Article</span></li>
<li><span data-preserver-spaces="true">Conversation Started</span></li>
<li><span data-preserver-spaces="true">Clicked Message CTA</span></li>
<li><span data-preserver-spaces="true">Closed Message CTA</span></li>
<li><span data-preserver-spaces="true">Message Shown To Visitor</span></li>
<li><span data-preserver-spaces="true">Visitor Performed Search</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Helpscout chat interactions.</span></p>
<p><span data-preserver-spaces="true">Also, if you need more information on certain interactions, there are dataLayer variables you’ll have to create, which are available on some chat interactions</span></p>
<p><strong><span data-preserver-spaces="true">[chatBeaconId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat widget ID, it’s available on all events</span></p>
<p><strong><span data-preserver-spaces="true">[chatBeaconName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat widget name, it’s also available on all events</span></p>
<p><strong><span data-preserver-spaces="true">[chatSessionData]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the the user session ID, available on all events</span></p>
<p><strong><span data-preserver-spaces="true">[visitorEmail]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user email, available on form submission events or events after the form submission.</span></p>
<p><strong><span data-preserver-spaces="true">[visitorName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user name, available on form submission events or events after form submission.</span></p>
<p><strong><span data-preserver-spaces="true">[articleID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the article ID, happens on the viewed article event</span></p>
<p><strong><span data-preserver-spaces="true">[vistorMessage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat message, not present on all events</span></p>
<p><strong><span data-preserver-spaces="true">[messageID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the message ID for chat events</span></p>
<p><strong><span data-preserver-spaces="true">[searchQuery]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the search query used by the user when a search was performed.</span></p>
<p><span data-preserver-spaces="true">Connect your marketing tags to the trigger and use the dataLayer variables you created to push more information about each Helpscout chat interaction.</span></p>
								</div>
				</div>
					</div>
		</div>
    `,
		listDescription: `Measure how users interact with your embedded Helpscout chat widget, and use the insights to improve your strategy.`,
		slug: 'helpscout',
		code: `
<script>
//Triggered when the Helpscout Beacon is closed open
Beacon('on', 'open', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Opened Helpscout Chat Widget",
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when the Helpscout Beacon is closed
Beacon('on', 'close', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Closed Helpscout Chat Widget",
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when a Docs Article is opened in Beacon
Beacon('on', 'article-viewed', function (article) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Viewed Article",
'articleID': article.id,
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when a Chat is started via Beacon
Beacon('on', 'chat-started', function (chatvisitor) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Conversation Started",
'vistorName': chatvisitor.name,
'vistorEmail': chatvisitor.email,
'vistorMessage': chatvisitor.text
});
});
//Triggered when a Message’s CTA is clicked
Beacon('on', 'message-clicked', function (message) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Clicked Message CTA",
'messageID': message.id,
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when a Message’s close button is clicked
Beacon('on', 'message-closed', function (message) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Closed Message CTA",
'messageID': message.id,
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when a Message is shown
Beacon('on', 'message-closed', function (message) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Message Shown To Visitor",
'messageID': message.id,
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
//Triggered when a Message is shown
Beacon('on', 'search', function (searchterm) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Helpscout_Interaction',
'chatAction': "Visitor Performed Search",
'searchQuery': searchterm.query,
'chatBeaconId': Beacon('info').beaconId,
'chatBeaconName': Beacon('info').beaconName,
'visitorDeviceID': Beacon('info').visitor.deviceId,
'chatSessionData': Beacon('info').visitor.sessionData,
'visitorEmail': Beacon('info').visitor.email,
'visitorName': Beacon('info').visitor.name
});
});
</script>
    `,
		logoPath: '/logos/helpscout.jpg'
	},
	{
		title: 'ChatBot',
		listDescription: `Get a better understanding of how users interact with the embedded chatbot widget on your website.`,
		description: `
    <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  ChatBot Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">You can send ChatBot user interactions data to your Analytics stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) using Google Tag Manager and the ChatBot event listener.</span></p>
<p><span data-preserver-spaces="true">Having this data in your measurement platform, gives you valuable insights into what impact these interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">Your first step will be to copy, and paste the ChatBot event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the ChatBot script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">In the next step you should create the <strong>[chatBot_Interaction]&nbsp;</strong>custom events, which is triggered on every interaction with the ChatBot widget.</span></p>
<p><span data-preserver-spaces="true">DataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> should be created for you to capture in GTM, the ChatBot event type.</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li>Maximize Chat Widget</li>
<li>Minimize Chat Widget</li>
<li>Hide Chat Widget</li>
<li>Send a Message</li>
<li>Start Conversation</li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> dataLayer variable as event parameters or for streamlining your trigger to fire on specific ChatBot chat interactions.</span></p>
<p>Connect your marketing tags to the trigger and use the dataLayer variables you created to push more information about each ChatBot chat interaction.</p>
								</div>
				</div>
					</div>
    `,
		slug: 'chatbot',
		logoPath: '/logos/chatbot.jpg',
		code: `
<script>
window.BE_API = window.BE_API || {};
window.BE_API.onChatWindowOpen = function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatBot_Interaction',
'chatAction': 'Maximize Chat Widget'
});
};
// fires when you minimize chat widget
window.BE_API = window.BE_API || {};
window.BE_API.onChatWindowClose = function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatBot_Interaction',
'chatAction': 'Minimize Chat Widget'
});
};
// fires when the chat window is hidden
window.BE_API = window.BE_API || {};
window.BE_API.onChatWindowHide = function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatBot_Interaction',
'chatAction': 'Hide Chat Widget'
});
};
// fires on sending a message
window.BE_API = window.BE_API || {};
window.BE_API.onMessage = function (result) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatBot_Interaction',
'chatAction': 'Send a Message',
'Chatmessage': result
});
};
// fires when a conversation is started
window.BE_API = window.BE_API || {};
window.BE_API.onStartConversation = function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatBot_Interaction',
'chatAction': 'Start Conversation'
});
};
</script>
    `,
	},
	{
		title: 'Chatflow',
		listDescription: `Leverage this event listener to monitor user interactions with the Chatflow widget on your website.`,
		description: `
    <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Chatflow Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Here </span><span data-preserver-spaces="true">is</span><span data-preserver-spaces="true"> the instructions that </span><span data-preserver-spaces="true">walks</span><span data-preserver-spaces="true"> you through how to use</span><span data-preserver-spaces="true"> the <a href="https://chatflow.no/" target="_blank" rel="noopener">Chatflow</a> event listener in Google Tag Manager (GTM) to track user interactions with the Chatflow chat widget.</span><span data-preserver-spaces="true"> By implementing this solution, you can capture interactions as events in analytics tools like Google Analytics (GA4), Piwik Pro, etc.</span></p>
<h3><span data-preserver-spaces="true">Step 1: Add the Chatflow Event Listener Script to GTM</span></h3>
<p><span data-preserver-spaces="true">Start by copying and implementing the Chatflow event listener script on your website via your GTM container:</span></p>
<p>&nbsp;</p>
<ol>
<li><strong><span data-preserver-spaces="true">Create a New Tag</span></strong>
<ul>
<li><span data-preserver-spaces="true">Go to your GTM account and create a new tag.</span></li>
<li><span data-preserver-spaces="true">Set the tag type to </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true">.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Paste the Script</span></strong>
<ul>
<li><span data-preserver-spaces="true">Copy and paste the Chatflow event listener script into the custom HTML tag.</span></li>
<li><span data-preserver-spaces="true">Name the tag appropriately (e.g., “Chatflow Event Listener”).</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Set a Trigger</span></strong>
<ul>
<li><span data-preserver-spaces="true">Configure the tag to fire on the </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> trigger type. </span><span data-preserver-spaces="true">This</span><span data-preserver-spaces="true"> ensures </span><span data-preserver-spaces="true">that the</span><span data-preserver-spaces="true"> event listener script loads </span><span data-preserver-spaces="true">only</span><span data-preserver-spaces="true"> after the Chatflow widget is available.</span></li>
</ul>
</li>
</ol>
<h4><span data-preserver-spaces="true">What Does the Event Listener Script Do?</span></h4>
<p><span data-preserver-spaces="true">The Chatflow event listener monitors key user interactions with the Chatflow widget, such as opening, closing, sending messages, and more. When one of these events occurs, it triggers a dataLayer event named “</span><strong><span data-preserver-spaces="true">chatflow_interactions</span></strong><span data-preserver-spaces="true">“.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">These interactions </span><span data-preserver-spaces="true">are tracked</span><span data-preserver-spaces="true"> with dataLayer variables such as:</span></p>
<p>&nbsp;</p>
<ul>
<li><strong><span data-preserver-spaces="true">chat_Action</span></strong><span data-preserver-spaces="true"> – Indicates the type of interaction (e.g., “opened,” “closed,” “message</span><span data-preserver-spaces="true">:sent</span><span data-preserver-spaces="true">“).</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></h3>
<p><span data-preserver-spaces="true">The next step is to set up a trigger that listens for Chatflow interactions:</span></p>
<ol>
<li><strong><span data-preserver-spaces="true">Create a New Trigger</span></strong>
<ul>
<li><span data-preserver-spaces="true">In GTM, go to </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> and click </span><strong><span data-preserver-spaces="true">New</span></strong><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">Choose the </span><strong><span data-preserver-spaces="true">Custom Event</span></strong><span data-preserver-spaces="true"> trigger type.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Configure the Trigger</span></strong>
<ul>
<li><span data-preserver-spaces="true">Set the event name to:</span></li>
<li><span data-preserver-spaces="true">chatflow_interactions&nbsp;&nbsp;</span></li>
<li><span data-preserver-spaces="true">Name your trigger (e.g., “CE – Chatflow Interactions Trigger”).</span></li>
</ul>
</li>
</ol>
<h3><span data-preserver-spaces="true">Step 3: Define DataLayer Variables</span></h3>
<p><span data-preserver-spaces="true">To enrich your tracking setup, create the following variables in GTM. These variables will extract specific details from the dataLayer for each Chatflow interaction:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">chat_Action</span></strong><span data-preserver-spaces="true">: Captures the type of interaction (e.g., “opened,” “message</span><span data-preserver-spaces="true">:sent</span><span data-preserver-spaces="true">“).</span></li>
</ul>
<h4><span data-preserver-spaces="true">How to Create DataLayer Variables:</span></h4>
<ol>
<li><span data-preserver-spaces="true">Navigate to </span><strong><span data-preserver-spaces="true">Variables</span></strong><span data-preserver-spaces="true"> in GTM and click </span><strong><span data-preserver-spaces="true">New</span></strong><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">Select </span><strong><span data-preserver-spaces="true">Data Layer Variable</span></strong><span data-preserver-spaces="true"> as the variable type.</span></li>
<li><span data-preserver-spaces="true">Set the variable name (e.g., “</span><strong><span data-preserver-spaces="true">chat_Action</span></strong><span data-preserver-spaces="true">“) and corresponding key.</span></li>
<li><span data-preserver-spaces="true">Repeat for each variable needed.</span></li>
</ol>
<h3><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Pixels</span></h3>
<p><span data-preserver-spaces="true">Once your variables and triggers are in place, it’s time to configure your marketing tags or analytics pixels to utilize the Chatflow data.</span></p>
<ol>
<li><strong><span data-preserver-spaces="true">Set Up a Tag</span></strong>
<ul>
<li><span data-preserver-spaces="true">Create a new tag for platforms like Google Analytics (GA4), Piwik Pro, </span><span data-preserver-spaces="true">or others</span><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">Use the “</span><strong><span data-preserver-spaces="true">chat_Action</span></strong><span data-preserver-spaces="true">” variable in your tag configuration to add context to tracked events.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Attach the Trigger</span></strong>
<ul>
<li><span data-preserver-spaces="true">Attach the “</span><strong><span data-preserver-spaces="true">CE – Chatflow Interactions Trigger</span></strong><span data-preserver-spaces="true">” to your tag to ensure it fires on all relevant events.</span></li>
</ul>
</li>
</ol>
<p><strong>Implementation Notes:</strong></p>
<p><span>The Chatflow event listener can be used without Google Tag Manager and other Tag Management Systems (TMS), such as Piwik Pro Tag Manager. The implementation principles remain the same across platforms.</span></p>
<p>&nbsp;</p>
<p><span>💡&nbsp;<strong>Pro Tip</strong>: To simplify your setup, download the GTM recipe template on this resource page. Customize it to suit your needs, and you can seamlessly track Chatflow interactions.</span></p>
								</div>
				</div>
					</div>
    `,
		slug: 'chatflow',
		logoPath: '/logos/chatflow.jpg',
		code: `<script>
(function () {
var chatEvents = [
"opened",
"closed",
"maximized",
"minimized",
"halfed",
"message:sending",
"message:sent",
"reply:requested",
"reply:received",
"identified"
];

var pushToDataLayer = function (eventName, eventDetails) {
var data = {
event: "chatflow_interactions",
chat_Action: eventName
};

if (eventDetails && typeof eventDetails === "object") {
for (var key in eventDetails) {
if (eventDetails.hasOwnProperty(key)) {
data[key] = eventDetails[key];
}
}
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push(data);
};

// Attach listeners for specified events
for (var i = 0; i < chatEvents.length; i++) {
Chatflow.on(chatEvents[i], (function (eventName) {
return function (event) {
pushToDataLayer(eventName, event.detail || {});
};
})(chatEvents[i]));
}
})();
</script>`
	},
	{
		title: 'Zopim Chat',
		listDescription: `Fire your marketing tags/pixels on specific Zopim chat interactions using this event listener in GTM.`,
		code: `<script>
$zopim(function() {
$zopim.livechat.setOnChatStart(function() {
// trigger when chat starts
window.dataLayer.push({
"event": "zopimChat",
"zopimChatAction": "zopim Chat Started"
});
});
$zopim.livechat.setOnChatEnd(function() {
// trigger when chat closes
window.dataLayer.push({
"event": "zopimChat",
"zopimChatAction": "zopim Chat Closed"
});
});
$zopim.livechat.window.onShow(function() {
// trigger when the chat window is shown
window.dataLayer.push({
"event": "zopimChat",
"zopimChatAction": "zopim Chat Visible"
});
});
$zopim.livechat.window.onHide(function() {
// trigger when the chat window is shown
window.dataLayer.push({
"event": "zopimChat",
"zopimChatAction": "zopim Chat Hidden"
});
});
});
</script>`,
		description: `
<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Zopim Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using Google Tag Manager and this event listener script, you can track Zopim chat activity and have the data available in your analytics stack, Google Analytics, Piwik Pro, Mixpanel, Fullstory, Amplitude, etc.</span></p>
<p><span data-preserver-spaces="true">To achieve this, you’ll have to copy this Zopim Chat event listener script and paste it into a new custom HTML tag type in Google Tag Manager, and add a trigger to fire the code on pageview or DOM ready (recommended).</span></p>
<p><span data-preserver-spaces="true">💡&nbsp;</span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;fire on DOM ready if you implemented the Zopim chat widget through GTM).</span></p>
<p><span data-preserver-spaces="true">The next step is to create a dataLayer variable <strong>[zopimChatAction]</strong> which tells us what chat activity occurred.</span></p>
<p><span data-preserver-spaces="true">After creating the variable, you should create a custom event trigger with the event name <strong>[zopimChat]</strong>, which fires on every Zopim chat activity.</span></p>
<p><span data-preserver-spaces="true">The event captures chat activities like;</span></p>
<ol>
<li><span data-preserver-spaces="true">The user starts a chat</span></li>
<li><span data-preserver-spaces="true">The user closed a chat</span></li>
<li><span data-preserver-spaces="true">The Zopim chat widget is visible (expanded)</span></li>
<li><span data-preserver-spaces="true">The Zopim chat widget gets minimized</span></li>
</ol>
<p><span data-preserver-spaces="true">Now that you’ve created the trigger, you can now link your marketing tags to this trigger and use the <strong>[zopimChatAction]</strong> dataLayer variable, to dynamically capture the activity type that happened.</span></p>
<p><strong>🏆 Credit:</strong></p>
<p><strong>The original code creator is <a href="https://www.analyticsmania.com/zopim-google-analytics/" target="_blank" rel="noopener">Julius Fedorovicius</a> (we only extended the number of actions the script can track)</strong></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>
		</div>
`,
		slug: 'zopim-chat',
		logoPath: '/logos/zopim.jpg'
	},
	{
		title: 'Live Chat',
		listDescription: 'Track user interactions with your Live Chat widget using this event listener and fire your tags/pixels on these actions.',
		code: `<script>
//when the chat window state is changed, minimized, maximized or hidden
LiveChatWidget.on('visibility_changed', onVisibilityChanged)
function onVisibilityChanged(data) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: "chat window" + ' ' + data.visibility
})
};
// when form is submitted, prechat, survey or ticket
LiveChatWidget.on('form_submitted', onFormSubmitted)
function onFormSubmitted(data) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: "submitted" + ' ' + data.type + " form"
})
};
// user sents a message, file or rich message
LiveChatWidget.on('new_event', onNewEvent)
function onNewEvent(event) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: event.type + " sent"
})
};
//It is called after the customer has rated the chat, or cancelled the previous rating.
LiveChatWidget.on('rating_submitted', onRatingSubmitted)
function onRatingSubmitted(value) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: value + " rating submitted"
})
};
//It is called after the greeting has been displayed to the customer.
LiveChatWidget.on('greeting_displayed', onGreetingDisplayed)
function onGreetingDisplayed(greeting) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: "greeting message displayed",
greetingId: greeting.id
})
};
//It is called after the greeting has been cancelled by the customer
LiveChatWidget.on('greeting_hidden', onGreetingHidden)
function onGreetingHidden(greeting) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: "greeting message dismissed",
greetingId: greeting.id
})
};
//It is called after the rich message button has been clicked by the customer.
LiveChatWidget.on('rich_message_button_clicked', onRichMessageButtonClicked)
function onRichMessageButtonClicked(data) {
dataLayer.push({ 
event: 'livechat interaction', 
chatAction: "clicked rich message button",
greetingId: greeting.id
})
}; 
</script>`,
		description: `
<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Live Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you have a Live Chat widget on your website, you can measure how users interact with the chat widget.</span></p>
<p><span data-preserver-spaces="true">Use the data to build a marketing audience, segmentation analysis on how the interaction impacts your conversions, website engagement metrics, marketing funnel, and other KPIs.</span></p>
<p><span data-preserver-spaces="true">You can use Google Tag Manager and the Live chat event listener for implementing this tracking.</span></p>
<p><span data-preserver-spaces="true">Sending the data to your analytics tools (Google Analytics, Piwik Pro, Yandex Metrica, Mixpanel, Amplitude, Heap, etc.)</span></p>
<p><span data-preserver-spaces="true">Begin by creating a new custom HTML tag type in Google Tag Manager, copy and paste the Live chat event listener code in this tag, fire it on DOM Ready or Window loaded (Recommended)</span></p>
<p><strong><span data-preserver-spaces="true">💡PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;use the DOM ready if you implemented live chat through Google Tag Manager</span></p>
<p><span data-preserver-spaces="true">What this code does is listen for Live Chat activities such as;</span></p>
<ol>
<li><span data-preserver-spaces="true">Minimize and Maximize chat widget</span></li>
<li><span data-preserver-spaces="true">chat rating</span></li>
<li><span data-preserver-spaces="true">send a message, file or rich-text</span></li>
<li><span data-preserver-spaces="true">greeting message impression and dismissal</span></li>
<li><span data-preserver-spaces="true">Clicking on the rich message button</span></li>
<li><span data-preserver-spaces="true">submits pre-chat, survey or ticket form</span></li>
</ol>
<p><span data-preserver-spaces="true">To fire your tags when this event happens, you can create a custom event trigger with the name&nbsp;</span><strong><span data-preserver-spaces="true">[livechat interaction]</span></strong></p>
<p><span data-preserver-spaces="true">🚨 This event&nbsp;</span><strong><span data-preserver-spaces="true">[livechat interaction]&nbsp;</span></strong><span data-preserver-spaces="true">gets fired for all Live chat interactions.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Using Google Tag Manager dataLayer variables, you can get more data about the chat interactions, which includes;</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; tells you what chat action occurred (examples are minimized chat widget, submit the pre-chat form, dismiss greeting message, etc.)</span></p>
<p><strong><span data-preserver-spaces="true">[greetingId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the greeting ID (for greeting related events).</span></p>
<p><span data-preserver-spaces="true">To have these data available in your analytics tool or advertising platform, you’ll have to create the needed tag and attach the Live chat trigger.</span></p>
<p><span data-preserver-spaces="true">💡 You can streamline the event to fire on specific Livechat interactions by using the dataLayer variables and trigger conditions</span></p>
								</div>
				</div>
					</div>
		</div>
`,
		slug: 'live-chat',
		logoPath: '/logos/live-chat.jpg'
	},
	{
		title: 'Intercom',
		listDescription: 'Capture activity from Intercom chats and push events and conversions to all of your marketing platforms.',
		description: `
    <div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Intercom Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Intercom is used in providing excellent customer support to your website visitors, but tracking how users interact with the chat widget will help enhance your measurement data.</span></p>
<p><span data-preserver-spaces="true">To implement this, the easy way, you can use Google Tag Manager and the Intercom chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">Create a custom HTML tag type, paste the javascript code you copied, but you have to make some customization to the event listener for it to work.</span></p>
<p><span data-preserver-spaces="true">You’ll have to change the&nbsp;</span><strong><span data-preserver-spaces="true">app_id</span></strong><span data-preserver-spaces="true">&nbsp;value, which you can find at the beginning of the code, to your account app ID.</span></p>
<blockquote><p><span data-preserver-spaces="true">&lt;script type=”text/javascript”&gt;</span></p>
<p><span data-preserver-spaces="true">window.intercomSettings = {</span></p>
<p><span data-preserver-spaces="true">app_id: “&lt;app_id here&gt;”</span></p>
<p><span data-preserver-spaces="true">};</span></p>
<p><span data-preserver-spaces="true">&lt;/script&gt;</span></p></blockquote>
<p><span data-preserver-spaces="true">Save the custom HTML tag and add a Pageview or DOM Ready trigger (Recommended for all cases)</span></p>
<p><strong><span data-preserver-spaces="true">💡PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;use the DOM ready if you implemented Intercom chat through Google Tag Manager</span></p>
<p><span data-preserver-spaces="true">What happens is the Intercom event listener fires 2 events for the intercom open and close chat widget;</span></p>
<p><strong><span data-preserver-spaces="true">[intercomOpened]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; for when the user opens the Intercom Chat Widget</span></p>
<p><strong><span data-preserver-spaces="true">[intercomOpened]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; for when the chat widget is closed</span></p>
<p><span data-preserver-spaces="true">Create the custom events in Google Tag Manager, and attach them to the appropriate analytics tag (Google Analytics, Heap, Mixpanel, etc.)</span></p>
<p><span data-preserver-spaces="true">Once you’re done with this, you should debug to test and then you can publish your GTM container.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>
		</div>
    `,
		slug: 'intercom',
		logoPath: '/logos/intercom.jpg',
		code: `<script type="text/javascript">
window.intercomSettings = {
app_id: "<app_id here>"
};
</script>
<script type="text/javascript">
(function() {
var c = window,
a = c.Intercom;
if ("function" === typeof a) a("reattach_activator"), a("update", intercomSettings);
else {
var e = document,
d = function() {
d.c(arguments)
};
d.q = [];
d.c = function(b) {
d.q.push(b)
};
c.Intercom = d;
a = function() {
var b = e.createElement("script");
b.type = "text/javascript";
b.async = !0;
b.src = "https://widget.intercom.io/widget/xe395ivj";
var f = e.getElementsByTagName("script")[0];
f.parentNode.insertBefore(b, f)
};
c.attachEvent ? c.attachEvent("onload", a) : c.addEventListener("load", a, !1)
}
})();
</script>
<script type="text/javascript">
window.Intercom("onShow", function() {
window.dataLayer.push({
event: "intercomOpened"
})
});
window.Intercom("onHide", function() {
window.dataLayer.push({
event: "intercomClosed"
})
});
</script>`
	}, {
		title: 'Jivo Chat',
		listDescription: 'This event listener makes it possible to fire your tags/pixels when users engage with your Jivo chat widget',
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Jivo Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Jivo chat interactions in your analytics tools give you valuable insights into the impact these chat interactions have on your marketing funnel, conversions, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Jivo chat activity tracking, you’ll need Google Tag Manager and the Jivo chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡PRO TIP: if you installed the Jivo chat script through Google Tag Manager, please use the DOM ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">What the Jivo chat event listener does, is to fire an event on every interaction with the Jivo chat widget.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[jivochat interaction]</span></strong><span data-preserver-spaces="true">, which gets fired on all chat activity</span></p>
<p><span data-preserver-spaces="true">To get more information on what chat activity happened, you’ll need to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">chat window opened</span></li>
<li><span data-preserver-spaces="true">user sents first message</span></li>
<li><span data-preserver-spaces="true">agent accepts chat</span></li>
<li><span data-preserver-spaces="true">chat window closed</span></li>
<li><span data-preserver-spaces="true">submitted chat form</span></li>
<li><span data-preserver-spaces="true">user started a call</span></li>
<li><span data-preserver-spaces="true">user ended a call</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable to send information about the Jivo chat activity</span></p>
<p><span data-preserver-spaces="true">To capture the Jivo chat widget, create a dataLayer with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatWidgetID]</span></strong></p>
<p><span data-preserver-spaces="true">Connect your analytics tags to the trigger and use the dataLayer variables you created to push more information about each Jivo chat interaction.</span></p>
<p><span data-preserver-spaces="true">Having these data in your analytics can help provide actionable insights into your marketing and customer support strategy.</span></p>
								</div>
				</div>
					</div>`,
		code: `<script>
//Executed when chat window is opened
function jivo_onOpen() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'chat window opened',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when a visitor sends the first message
function jivo_onMessageSent() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'user sents first message',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when an agent presses the Reply button in the notification of a new chat
function jivo_onAccept() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'agent accepts chat',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when chat window is closed
function jivo_onClose() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'chat window closed',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when a visitor fills the contacts form
function jivo_onIntroduction() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'submitted chat form',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when visitor makes phone call
function jivo_onCallStart() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'user started a call',
chatWidgetID: jivo_config.widget_id
})
};
//Executed when a phone call ends
function jivo_onCallEnd() {
dataLayer.push({ 
event: 'jivochat interaction', 
chatAction: 'user ended a call',
chatWidgetID: jivo_config.widget_id
})
};
</script>`,
		slug: 'jivo-chat',
		logoPath: '/logos/jivo.jpg'
	},
	{
		title: 'Userlike Chat',
		listDescription: 'Track users interactions with your embedded Userlike live chat widget using this event listener.',
		description: `
    <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Userlike chat interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Seamlessly push user interactions with your Userlike chat widget to your analytics tools (Google Analytics, Heap, Piwik Pro, Mixpanel).</span></p>
<p><span data-preserver-spaces="true">Implementing this, you’ll create a new custom HTML tag, copy and paste the Chaport event listener in the tag</span></p>
<p><span data-preserver-spaces="true">Add a trigger and fire in on DOM ready or Window Loaded.</span></p>
<p><span data-preserver-spaces="true">Next is to create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[Userlike_Action]</span></strong><span data-preserver-spaces="true">, which triggers on all chaport Events.</span></p>
<p><span data-preserver-spaces="true">For more information on the specific event that occurred, create a dataLayer variables with the following keys;</span></p>
<p><strong><span data-preserver-spaces="true">[ChatAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns 35 different event names, like chat_connected, chat_started, chat_window_maximized, pre_survey_submit, etc.</span></p>
<p><strong><span data-preserver-spaces="true">[ChatWidgetID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; ID of the Widget</span></p>
<p><strong><span data-preserver-spaces="true">[ChatOperatorID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Operator ID of the current chat session</span></p>
<p><strong><span data-preserver-spaces="true">[ChatUserID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Unique ID of the contact</span></p>
<p><strong><span data-preserver-spaces="true">[ChatwidgetLanguage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; language code of the current Widget</span></p>
<p><strong><span data-preserver-spaces="true">[Userlanguage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user browser language</span></p>
<p><strong><span data-preserver-spaces="true">[ChatID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Chat ID which relates to the chat transcripts</span></p>
<p><strong><span data-preserver-spaces="true">[ChatSessionID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Session ID per browser session</span></p>
<p><span data-preserver-spaces="true">To start sending data to your analytics tools, you’ll have to create the appropriate tag and attach the&nbsp;</span><strong><span data-preserver-spaces="true">[Userlike_Action]</span></strong><span data-preserver-spaces="true">&nbsp;trigger you created.</span></p>
<p><span data-preserver-spaces="true">Also, you can streamline your trigger to fire for specific chat interactions by using trigger conditions and dataLayer variables such as&nbsp;</span><strong><span data-preserver-spaces="true">[ChatAction]</span></strong></p>
<p><span data-preserver-spaces="true">With this data in your analytics, you can measure how these chat interactions impact conversions, your marketing funnel and other business KPIs.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>
    `,
		code: `<script>
userlikeTrackingEvent = function (event_name, global_ctx, session_ctx) {
window.dataLayer.push({
event: "Userlike_Action",
ChatAction: event_name,
ChatWidgetID: global_ctx.widget_id,
ChatOperatorID: session_ctx.operator_id,
ChatUserID: global_ctx.client_uuid,
ChatwidgetLanguage: global_ctx.widget_lang,
Userlanguage: navigator.language,
ChatID: session_ctx.chat_id,
ChatSessionID: session_ctx.session_id
});
};
</script>`,
		slug: 'userlike-chat',
		logoPath: '/logos/userlike.jpg'
	}, {
		title: 'Olark Chat',
		listDescription: 'Measure how users interact with your Olark chat widget and fire your marketing tags on these actions.',
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Olark chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Olark chat interactions in your analytics tools give you valuable insights into the impact these chat interactions have on your marketing funnel, conversions, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Olark chat activity tracking, you’ll need Google Tag Manager and the Olark chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Olark chat script through Google Tag Manager, please use the DOM ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">What the Olark chat event listener does, is to fire an event on every interaction with the Olark chat widget.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[OlarkChatAction]</span></strong><span data-preserver-spaces="true">, which gets fired on all chat activity</span></p>
<p><span data-preserver-spaces="true">To get more information on what chat activity happened, you’ll need to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">Visitor_Expanded_Olark</span></li>
<li><span data-preserver-spaces="true">Visitor_Sent_Offline_Message</span></li>
<li><span data-preserver-spaces="true">Visitor_Started_Conversation</span></li>
<li><span data-preserver-spaces="true">Visitor_Message_Operator</span></li>
<li><span data-preserver-spaces="true">Operator_ Message_Visitor</span></li>
<li><span data-preserver-spaces="true">Operator_ Command_Action</span></li>
<li><span data-preserver-spaces="true">Operator_Available</span></li>
<li><span data-preserver-spaces="true">Operator_UnAvailable</span></li>
<li><span data-preserver-spaces="true">User_Hides_Olark</span></li>
<li><span data-preserver-spaces="true">User_Minimizes_Olark</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Olark chat interactions.</span></p>
<p><span data-preserver-spaces="true">To capture the user data, create a dataLayer variable, using dot notation to select your prefered user data from object&nbsp;</span><strong><span data-preserver-spaces="true">[userDetails]</span></strong></p>
<p><span data-preserver-spaces="true">Also, if you need more information on certain interactions, there is an object&nbsp;</span><strong><span data-preserver-spaces="true">[chat_details]</span></strong><span data-preserver-spaces="true">&nbsp;that has data about the chat interactions</span></p>
<p><span data-preserver-spaces="true">Connect your analytics tags to the trigger and use the dataLayer variables you created to push more information about each Olark chat interaction.</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:&nbsp;</span></strong><span data-preserver-spaces="true">there are two events with the names;</span><strong><span data-preserver-spaces="true">&nbsp;</span></strong></p>
<p><strong><span data-preserver-spaces="true">[OlarkChatInfo]</span></strong><span data-preserver-spaces="true">&nbsp;fires on page load and gets the user data from Olark, stay persistent on the page but clears after page load</span></p>
<p><span data-preserver-spaces="true">&nbsp;</span></p>
<p><strong><span data-preserver-spaces="true">[OlarkChatAvailable]</span></strong><span data-preserver-spaces="true">&nbsp;fires on page load, tells us that chat widget is ready and live</span></p>
<p><span data-preserver-spaces="true">You should ignore them and don’t use them for triggering your tags.</span></p>
<p><span data-preserver-spaces="true">Having the data in your analytics tools, such as Google Analytics, Mixpanel, Piwik Pro, Heap, Fullstory, Amplitude, etc. gives you actionable insights into your marketing and customer support strategy.</span></p>
<p><span data-preserver-spaces="true">You can also use the data to understand how these chat interactions impacts conversions, website engagements, your marketing funnel and other business KPIs.</span></p>
								</div>
				</div>
					</div>`,
		code: `<script type="text/javascript">
//get the user details
olark('api.visitor.getDetails', function(details){
dataLayer.push({
'event': 'OlarkChatInfo',
'userDetails': details
});
});
olark('api.chat.onReady', function(){
dataLayer.push({
'event': 'OlarkChatAvailable'
});
});
//visitor exapnds chat box
olark('api.box.onExpand', function(event) {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Visitor_Expanded_Olark'
});
});
//
olark('api.chat.onOfflineMessageToOperator', function(event) {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Visitor_Sent_Offline_Message',
'chatMessage': event.message.body,
'chat_details': event
});
});
// Triggers when the first message has been sent
// Including automated messages from the Greeter or Targeted Chat rules
olark('api.chat.onBeginConversation', function() {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Visitor_Started_Conversation'
});
});
//track of visitors who have sent a message to an operator
olark('api.chat.onMessageToVisitor', function(event) {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Visitor_Message_Operator',
'chatMessage': event.message.body,
'chat_details': event
});
});
//tracks Whenever a message is sent to the visitor
olark('api.chat.onMessageToOperator', function(event) {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Operator_ Message_Visitor',
'chatMessage': event.message.body,
'chatOperator': event.message.nickname,
'chat_details': event
});
});
//tracks Whenever a command is sent from the visitor, e.g chat end, lead
olark('api.chat.onCommandFromOperator', function(event) {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Operator_ Command_Action',
'chatMessage': event.message.body,
'chatOperator': event.message.nickname,
'chat_details': event
});
});
//tracks Whenever any operator comes online
olark('api.chat.onOperatorsAvailable', function() {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Operator_Available'
});
});
//tracks Whenever all operators are offline
olark('api.chat.onOperatorsAway', function() {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'Operator_UnAvailable'
});
});
//track chat box minimized
olark('api.box.onHide', function() {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'User_Hides_Olark'
});
});
//user minimizes chat box
olark('api.box.onShrink', function() {
dataLayer.push({
'event': 'OlarkChatAction',
'chatAction': 'User_Minimizes_Olark'
});
});
</script>`,
		slug: 'olark-chat',
		logoPath: '/logos/olark.jpg'
	}, {
		title: 'Chaport Chat',
		listDescription: 'Track how users engage with your Chatport chat widget and enhance your data using this listener.',
		code: `<script>
//chat widget status update
window.chaport.on('widget.stateChange', function(widgetstate){
window.dataLayer.push({
"event": "chaport_Action",
"ChatAction": "Chat widget " + window.chaport.getWidgetState()
});
});
//Fires when the visitor starts a chat.
window.chaport.on('chat.started', function(listener) {
window.dataLayer.push({
"event": "chaport_Action",
"ChatAction": "Chat initiated"
}); 
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Chaport Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you use Chaport to provide customer support to your website visitors, you can seamlessly push user interactions with your Chaport chat widget to your analytics tools (Google Analytics, Heap, Piwik Pro, Mixpanel).</span></p>
<p><span data-preserver-spaces="true">For this implementation, you’ll create a new custom HTML tag, copy and paste the Chaport event listener in the tag</span></p>
<p><span data-preserver-spaces="true">Add a trigger and fire in on DOM ready or Window Loaded.</span></p>
<p><span data-preserver-spaces="true">Next is to create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[chaport_Action]</span></strong><span data-preserver-spaces="true">, which triggers on all chaport Events.</span></p>
<p><span data-preserver-spaces="true">For more information on the specific event that occurred, create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[ChatAction]</span></strong><span data-preserver-spaces="true">, which will return the following;</span></p>
<ol>
<li><span data-preserver-spaces="true">Chat initiated (meaning the user started a conversation)</span></li>
<li><span data-preserver-spaces="true">chat widget expanded</span></li>
<li><span data-preserver-spaces="true">chat widget collapsed</span></li>
<li><span data-preserver-spaces="true">chat widget semiExpanded</span></li>
<li><span data-preserver-spaces="true">chat widget unreadMessage (when you have an unread message)</span></li>
</ol>
<p><span data-preserver-spaces="true">To start sending data to your analytics tools, you’ll have to create the appropriate tag and attach the&nbsp;</span><strong><span data-preserver-spaces="true">[chaport_Action]</span></strong><span data-preserver-spaces="true">&nbsp;trigger you created.</span></p>
<p><span data-preserver-spaces="true">With this data in your analytics, you can measure how these chat interactions impact conversions, your marketing funnel and other business KPIs.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'chaport-chat',
		logoPath: '/logos/chaport.jpg'
	}, {
		title: 'Tidio Chat',
		listDescription: 'Send to your analytics, data of how users interact with your Tidio Chat widget, using GTM and this event listener.',
		code: `<script>
//fires on opening tidio chat
window.tidioChatApi.on("open", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Opened Tidio Chat widget'
});
});
// fires on closing tidio chat
window.tidioChatApi.on("close", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Closed Tidio Chat widget'
});
});
// fires on first user message
window.tidioChatApi.on("conversationStart", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'User Sent First Message'
});
});
//fires when an operator sends a mesaage
window.tidioChatApi.on("messageFromOperator", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Message Sent By Operator'
});
});
//fires when a visitor sends a mesaage
window.tidioChatApi.on("messageFromVisitor", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Message Sent By Visitor'
});
});
//fires when a visitor submits prefill form
window.tidioChatApi.on("preFormFilled", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Tidio Prefill Form Submitted'
});
});
//fires when Tido chat status change
window.tidioChatApi.on("setStatus", function(onTidioChatApiReady){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'Tidio_chat_interaction',
'chatAction': 'Tidio Chat Status'
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Tidio Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Enhance the data in your measurement stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) with Tidio chat interaction data.</span></p>
<p><span data-preserver-spaces="true">With this data, you can have valuable insights into what impact does these interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">Google Tag Manager, and the Tidio chat event listener script, will be needed for this implementation.</span></p>
<p><span data-preserver-spaces="true">Your first step will be to copy, and paste the event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Tidio chat script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[Tidio_chat_interaction]</span></strong><span data-preserver-spaces="true">, which happens on all Tidio chat activity.</span></p>
<p><span data-preserver-spaces="true">DataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;should be created for you to capture in GTM, the Tidio chat event type.</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">Opened Tidio Chat widget</span></li>
<li><span data-preserver-spaces="true">Closed Tidio Chat widget</span></li>
<li><span data-preserver-spaces="true">User Sent First Message</span></li>
<li><span data-preserver-spaces="true">Message Sent By Operator</span></li>
<li><span data-preserver-spaces="true">Message Sent By Visitor</span></li>
<li><span data-preserver-spaces="true">Tidio Prefill Form Submitted</span></li>
<li><span data-preserver-spaces="true">Tidio Chat Status</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> dataLayer variable as an event parameter or for streamlining your trigger to fire on specific Tidio chat interactions.</span></p>
<p>Connect your marketing tags to the trigger and use the dataLayer variables you created to push more information about each Tidio chat interaction.</p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>
    `,
		slug: 'tidio-chat',
		logoPath: '/logos/tidio.jpg'
	}, {
		title: 'Customerly.io',
		listDescription: 'Gain valuable insights into user engagement with your Customerly chat widget and enrich your marketing data.',
		code: `<script>
//fires when a user opens the chat widget
customerly.onChatOpened = function() { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'chat widget opened'
}); 
}
//fires when a user closes the chat widget 
customerly.onChatClosed = function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'chat widget closed'
}); 
}
//triggered when the customer is receiving a chat trigger message
customerly.onTriggerFired = function(triggerId) { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'chat trigger displayed',
'customerly_trigger_id': triggerId
}); 
}
//fires when a chat lead is generated
customerly.onLeadGenerated = function(email) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'new chat lead',
'customerly_user_email': email
}); 
}
//fires when a user starts a new conversation
customerly.onNewConversation = function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'starts a new conversation'
}); 
}
//triggered when the lead answer to any of the profiling questions 
customerly.onProfilingQuestionAnswered = function(attribute, value) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'answer profiling question',
'profiling_answer': value,
'profiling_attribute': attribute
}); 
}
//triggered when any of the profiling questions have been shown to the visitor 
customerly.onProfilingQuestionAsked = function(attribute) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'shown profiling question',
'profiling_attribute': attribute
}); 
}
//triggered when the client answers a Realtime Video Call
customerly.onRealtimeVideoAnswered = function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'answers a Realtime Video Call'
}); 
}
//triggered when the client rejects a Realtime Video Call
customerly.onRealtimeVideoRejected = function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'rejects a Realtime Video Call'
}); 
}
// triggered when the client opens a Help Center Article within the live chat widget.
customerly.onHelpCenterArticleOpened = function(article) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'customerly_Event',
'customerly_action': 'opens a Help Center Article',
'article_object_data': article
}); 
}
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Customerly Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">With the assistance of the Customerly chat event listener and Google Tag Manager, you can effectively track and measure user interactions with the Customerly chat on your website. By leveraging the insights derived from this data, you can better understand how these interactions impact your website conversions.</span></p>
<p><span data-preserver-spaces="true">Whether you utilize Google Tag Manager or Piwik Pro TMS, the event listener allows you to send Customerly chat interaction events to various analytics tools such as Google Analytics (GA4), Mixpanel, PiwikPro, and more.</span></p>
<p><span data-preserver-spaces="true">To initiate the implementation in GTM, create a custom HTML tag to which you will add the Customerly event listener script. Give the tag a descriptive name and set it to trigger on pageview or DOM ready.&nbsp;</span></p>
<p><span data-preserver-spaces="true">I would recommend using the “DOM Ready” trigger.</span></p>
<p><span data-preserver-spaces="true">This script actively listens for user interactions with your website’s embedded Customerly chat widget and sends the corresponding events and their attributes to the dataLayer.</span></p>
<p><span data-preserver-spaces="true">The dataLayer event name emitted for all Customerly chat interactions is “</span><strong><span data-preserver-spaces="true">[customerly_Event]</span></strong><span data-preserver-spaces="true">“.</span></p>
<p><span data-preserver-spaces="true">Next, set up a dataLayer variable to provide additional context about the event. The event variable is as follows:</span></p>
<p><strong><span data-preserver-spaces="true">[customerly_action]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This variable provides more details about the type of Customerly interaction that occurred. Examples include:</span></p>
<ul>
<li><span data-preserver-spaces="true">Chat widget opened</span></li>
<li><span data-preserver-spaces="true">Chat widget closed</span></li>
<li><span data-preserver-spaces="true">Chat trigger displayed</span></li>
<li><span data-preserver-spaces="true">New chat lead</span></li>
<li><span data-preserver-spaces="true">Starts a new conversation</span></li>
<li><span data-preserver-spaces="true">Answer profiling question</span></li>
<li><span data-preserver-spaces="true">Shown profiling question</span></li>
<li><span data-preserver-spaces="true">Answers a Realtime Video Call</span></li>
<li><span data-preserver-spaces="true">Rejects a Realtime Video Call</span></li>
<li><span data-preserver-spaces="true">Opens a Help Center Article</span></li>
</ul>
<p><span data-preserver-spaces="true">Additionally, it can be beneficial to create the following dataLayer variables, although they do not fire for every event:</span></p>
<p><strong><span data-preserver-spaces="true">[profiling_answer]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This variable contains the user’s answer to a profiling question or displays the question to the user.</span></p>
<p><strong><span data-preserver-spaces="true">[profiling_attribute]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This variable includes the user’s profile attribute value based on the displayed profiling question.</span></p>
<p><strong><span data-preserver-spaces="true">[customerly_trigger_id]</span></strong><span data-preserver-spaces="true"> –&gt; This variable returns the trigger ID of the chat trigger that was displayed to the website visitor.</span></p>
<p><strong><span data-preserver-spaces="true">[customerly_user_email]</span></strong><span data-preserver-spaces="true"> –&gt; This variable returns the user’s email when they submit a chat lead form.</span></p>
<p><strong><span data-preserver-spaces="true">[article_object_data]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This variable holds an object with the details of the Help Center article the user interacted with.</span></p>
<p><span data-preserver-spaces="true">Finally, add your tags to the created trigger, apply the appropriate variables where necessary, preview your changes, and publish them.</span></p>
								</div>
				</div>
					</div>
    `,
		slug: 'customerly-io',
		logoPath: '/logos/customerly.jpg'
	}, {
		title: 'Salesmate',
		listDescription: 'Seamlessly fire tags and pixels based on Salesmate chat interactions and form submissions.',
		code: `<script>
//fires when salesmate chat widget is opened
window.addEventListener('SALESMATE_ON_WIDGET_SHOW', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'salesmate_Event',
'event_type': 'chat',
'salesmate_action': 'chat widget opened'
});
});
//fires when salesmate chat widget is closed
window.addEventListener('SALESMATE_ON_WIDGET_HIDE', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'salesmate_Event',
'event_type': 'chat',
'salesmate_action': 'chat widget closed'
}); 
} );
// fires when unread message count changes
window.addEventListener('SALESMATE_ON_WIDGET_COUNT_CHANGE', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'salesmate_Event',
'event_type': 'chat',
'salesmate_action': 'unread message count change'
}); 
});
//fires when salesmate form gets submitted
window.addEventListener("SM_FORM_SUBMITTED", function (e) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'salesmate_Event',
'event_type': 'form_submitted',
'salesmate_action': 'web form submitted',
'salesmate_form_name': e.detail.formName, 
'salesmate_form_data': e.detail.formData
}); 
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Salesmate Chat and Form Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">By utilizing Google Tag Manager or your preferred tag management system, along with the Salesmate event listener, you can effectively track and measure user interactions with the Salesmate chat widget and the submission of embedded Salesmate forms on your website. This valuable data will provide insights into how these interactions impact your website’s conversion rates and the number of Salesmate form submissions you get, including the channel contributing to the conversion.</span></p>
<p><span data-preserver-spaces="true">Tracking Salesmate form submissions as conversions can greatly aid in retargeting and optimizing your advertisements. You can achieve this by firing your pixels upon Salesmate form submissions.</span></p>
<p><span data-preserver-spaces="true">Whether you opt for Google Tag Manager or Piwik Pro TMS, the event listener seamlessly transmits Chatlio chat interaction events to various analytics tools, including Google Analytics (GA4), Mixpanel, PiwikPro, and more.</span></p>
<p><span data-preserver-spaces="true">To begin the implementation process in GTM, create a custom HTML tag and incorporate the Salesmate event listener script. Assign a descriptive name to the tag and set it to trigger on either pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Using the “DOM Ready” trigger is highly recommended.</span></p>
<p><span data-preserver-spaces="true">The script actively listens for successful Salesmate form submissions and user interactions with the Salesmate chat widget embedded on your website. It captures relevant events and associated attributes, pushing them to the dataLayer.</span></p>
<p><span data-preserver-spaces="true">The dataLayer event name assigned to all Salesmate events is “</span><strong><span data-preserver-spaces="true">[salesmate_Event]</span></strong><span data-preserver-spaces="true">“.</span></p>
<p><span data-preserver-spaces="true">Next, establish a dataLayer variable to provide additional context for the event. The event variable is defined as follows:</span></p>
<p><strong><span data-preserver-spaces="true">[event_type]</span></strong><span data-preserver-spaces="true">&nbsp;-&gt; Indicates whether the interaction was a Salesmate “chat” or “form”.</span></p>
<p><strong><span data-preserver-spaces="true">[salesmate_action]</span></strong><span data-preserver-spaces="true">&nbsp;-&gt; This variable provides further details about the specific type of Salesmate action that occurred. Examples of these interactions include:</span></p>
<ul>
<li><span data-preserver-spaces="true">Chat widget opened</span></li>
<li><span data-preserver-spaces="true">Chat widget closed</span></li>
<li><span data-preserver-spaces="true">Unread message count change</span></li>
<li><span data-preserver-spaces="true">Web form submitted</span></li>
</ul>
<p><span data-preserver-spaces="true">For the Salesmate form submission event, two additional dataLayer keys can be created as variables:</span></p>
<p><strong><span data-preserver-spaces="true">[salesmate_form_name]</span></strong><span data-preserver-spaces="true">&nbsp;– Captures the name of the Salesmate form.</span></p>
<p><strong><span data-preserver-spaces="true">[salesmate_form_data]</span></strong><span data-preserver-spaces="true">&nbsp;– Retains the Salesmate form data in an object format.</span></p>
<p><span data-preserver-spaces="true">In the final stage of implementation, you will create your measurement tags, add your custom event trigger, apply the relevant variables as needed, preview your setup, and finally publish them.</span></p>
								</div>
				</div>
					</div>
    `,
		slug: 'salesmate',
		logoPath: '/logos/salesmate.jpg'
	},
	{
		title: 'Artibot AI',
		listDescription: 'Efficiently capture user interactions with your Airbot chatbot widget with the help of this event listener.',
		code: `<script>
// fires When your ArtiBot has loaded and is ready for use
window.artibotApi.on('bot:ready', function () { 
console.log('bot ready'); 
});
// fires When your ArtiBot is expaneded
window.artibotApi.on('bot:expanded', function () { 
console.log('DD - bot expanded'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'artibot widget expanded',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
// fires When your ArtiBot is collapsed
window.artibotApi.on('bot:collapsed', function () { 
console.log('DD - bot collapsed'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'artibot widget collapsed',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
// fires When your ArtiBot has started a chat
window.artibotApi.on('chat:started', function () { 
console.log('DD - chat started'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'chat started',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
// fires When a visitor sends a message
window.artibotApi.on('chat:message-sent', function () { 
console.log('DD - message sent'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'visitor sents message',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
// fires When ArtiBot sends a message
window.artibotApi.on('chat:message-received', function () { 
console.log('DD - message received'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'visitor receives message',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
// fires When the chat with ArtiBot has ended
window.artibotApi.on('chat:ended', function () { 
console.log('DD - chat ended'); 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'artibot_event',
'artibot_action': 'chat ended',
'artibot_id': window.artibotApi.get('bot.botId')
}); 
});
</script>`,
		description: `
    <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Artibot Chatbot Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">By using the Artibot chatbot event listener in conjunction with <a href="https://marketingplatform.google.com/about/tag-manager/" target="_blank" rel="noopener">Google Tag Manager</a> or whatever TMS you’re using for tag deployment and management, you gain the capability to measure interactions with your <a href="https://www.artibot.ai/" target="_blank" rel="noopener">Artibot chatbot</a> on your website and leverage the data to enrich your insights in analytics tools such as Google Analytics (GA4), Piwik Pro, and others.</span></p>
<p><span data-preserver-spaces="true">For you to capture this valuable data in your analytics tool, whether it’s Google Analytics (GA4), Mixpanel, Piwik Pro, etc., the process is straightforward, and you can follow the instructions outlined below.</span></p>
<p><span data-preserver-spaces="true">Begin by creating a new tag in Google Tag Manager of the custom HTML tag type. Please copy and paste the Artibot chat event listener code into this tag, assign a name to the GTM tag, and configure it to trigger on pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">💡 Pro Tip: Opt for firing on DOM ready if you’ve implemented the Smartsupp chat widget through GTM.</span></p>
<p><span data-preserver-spaces="true">The purpose of this event listener script is to monitor user interactions with the Artibot chatbot on your website and trigger a dataLayer event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[artibot_event]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">To determine the specific chatbot event, create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[artibot_action]</span></strong><span data-preserver-spaces="true">, with possible values including:</span></p>
<ul>
<li><span data-preserver-spaces="true">Artibot widget expanded</span></li>
<li><span data-preserver-spaces="true">Artibot widget collapsed</span></li>
<li><span data-preserver-spaces="true">Chat started</span></li>
<li><span data-preserver-spaces="true">Visitor sends message</span></li>
<li><span data-preserver-spaces="true">Visitor receives message</span></li>
<li><span data-preserver-spaces="true">&nbsp;Chat ended</span></li>
</ul>
<p><span data-preserver-spaces="true">The dataLayer event also includes a variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[artibot_id]</span></strong><span data-preserver-spaces="true">, representing your website’s embedded Artibot chatbot ID. This identifier proves useful for measuring the performance impact of various Artibot chatbots utilised on your site.</span></p>
<p><span data-preserver-spaces="true">The next step involves creating your tags in Google Tag Manager, such as <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener">Google Analytics (GA4)</a> tags, <a href="https://piwik.pro/" target="_blank" rel="noopener">Piwik Pro</a> event tags, and others.</span></p>
<p><span data-preserver-spaces="true">Note that this dataLayer event listener is adaptable to Piwik Pro Tag Manager and other Tag Management Solutions (TMS) vendors in use.</span></p>
<p><span data-preserver-spaces="true">As a crucial step, ensure that you thoroughly test your implementation in Google Tag Manager before proceeding with publishing.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>
    `,
		slug: 'artibot-ai',
		logoPath: '/logos/artibot.jpg'
	},
	{
		title: 'Support Board',
		listDescription: 'Gain valuable insights into how users interact with your website embedded Support Board chat widget.',
		code: `<script>

// Function to push event data to the GTM dataLayer
function pushToDataLayer(eventName, data) {
window.dataLayer = window.dataLayer || [];
var eventData = Object.assign({ event: eventName }, data);
window.dataLayer.push(eventData);
}

// Event listeners for Support Board events
$(document).on("SBChatOpen", function (e) {
pushToDataLayer("SBChatOpen", {});
});

$(document).on("SBChatClose", function (e) {
pushToDataLayer("SBChatClose", {});
});

$(document).on("SBNewConversationCreated", function (e, response) {
pushToDataLayer("SBNewConversationCreated", {
conversation: response
});
});

$(document).on("SBConversationOpen", function (e, response) {
pushToDataLayer("SBConversationOpen", {
conversation: response
});
});

$(document).on("SBArticles", function (e, response) {
pushToDataLayer("SBArticles", {
articles: response.articles,
articleId: response.id
});
});

$(document).on("SBRegistrationForm", function (e, response) {
pushToDataLayer("SBRegistrationForm", {
user: response.user,
extra: response.extra
});
});

$(document).on("SBPopup", function (e, response) {
pushToDataLayer("SBPopup", {
popupContent: response
});
});

$(document).on("SBMessageSent", function (e, response) {
pushToDataLayer("SBMessageSent", {
userId: response.user_id,
conversationId: response.conversation_id,
message: response.message,
attachments: response.attachments,
conversationSource: response.conversation_source
});
});

</script>`,
		description: `
    <div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Support Board Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Here’s how to use the <a href="https://board.support/" target="_blank" rel="noopener">Support Board chat</a> event listener and a Tag Management Solution (TMS) like Google Tag Manager to track website visitor interactions with the Support Board Chat widget on your site and send the data to analytics tools like Google Analytics (GA4), Piwik Pro, and others.</span></p>
<p><strong><span data-preserver-spaces="true">1. Create an Event Listener Custom HTML Tag &amp; Attach a Trigger: </span></strong></p>
<ul>
<li><span data-preserver-spaces="true">Begin by creating a custom HTML tag in Google Tag Manager.</span></li>
<li><span data-preserver-spaces="true">Paste the Support Board chat event listener script into this tag.</span></li>
<li><span data-preserver-spaces="true">Name the tag and add a trigger to fire it.</span></li>
</ul>
<p><span data-preserver-spaces="true">It’s recommended</span><span data-preserver-spaces="true"> that you</span><span data-preserver-spaces="true"> fire this script only after the Support Board chat widget has loaded on your website. </span><span data-preserver-spaces="true">To ensure the tag fires at the appropriate time,</span><span data-preserver-spaces="true"> you can use a DOM Ready or Window Loaded trigger type.</span></p>
<p><strong><span data-preserver-spaces="true">2. Understand the DataLayer Events: </span></strong></p>
<p><span data-preserver-spaces="true">The Support Board chat event listener monitors visitor interactions with the chat widget and triggers the following DataLayer events:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[SBChatOpen]</span></strong><span data-preserver-spaces="true">: When the chat widget is maximized (opened).</span></li>
<li><strong><span data-preserver-spaces="true">[SBChatClose]</span></strong><span data-preserver-spaces="true">: When the chat widget is minimized (closed).</span></li>
<li><strong><span data-preserver-spaces="true">[SBNewConversationCreated]</span></strong><span data-preserver-spaces="true">: When a user starts a new conversation.</span></li>
<li><strong><span data-preserver-spaces="true">[SBConversationOpen]</span></strong><span data-preserver-spaces="true">: When a user opens an existing conversation thread.</span></li>
<li><strong><span data-preserver-spaces="true">[SBArticles]</span></strong><span data-preserver-spaces="true">: When </span><span data-preserver-spaces="true">a user engages</span><span data-preserver-spaces="true"> with articles within the chat widget.</span></li>
<li><strong><span data-preserver-spaces="true">[SBRegistrationForm]</span></strong><span data-preserver-spaces="true">: When a user successfully submits the lead form through the chat widget.</span></li>
<li><strong><span data-preserver-spaces="true">[SBPopup]</span></strong><span data-preserver-spaces="true">: When a pop-up message is displayed or closed.</span></li>
<li><strong><span data-preserver-spaces="true">[SBMessageSent]</span></strong><span data-preserver-spaces="true">: When a user sends a message through the chat widget.</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">3. Create Custom Event Triggers: </span></strong></p>
<p><span data-preserver-spaces="true">Set up custom event triggers for </span><span data-preserver-spaces="true">each of</span><span data-preserver-spaces="true"> these DataLayer events, which you’ll later use to fire your analytics tags.</span></p>
<p><strong><span data-preserver-spaces="true">4. Send Data to Analytics Tools: </span></strong></p>
<p><span data-preserver-spaces="true">To send this chat widget interaction data to tools like Google Analytics (GA4), Piwik Pro, etc., you’ll need to create their respective event tags, attach the custom event triggers you’ve created for the dataLayer event, and make the necessary tag configuration.</span></p>
<p><span data-preserver-spaces="true">Some </span><span data-preserver-spaces="true">of the</span><span data-preserver-spaces="true"> dataLayer events include dataLayer keys, which you can create as dataLayer variables in GTM and use to add context to your analytics events.</span></p>
<p><span data-preserver-spaces="true">You should Interact</span><span data-preserver-spaces="true"> with the Support Board chat widget to identify which DataLayer variables are relevant.</span></p>
<p><span data-preserver-spaces="true">Scroll further down the resource page to find a downloadable GTM recipe template. </span><span data-preserver-spaces="true">Importing this into your container </span><span data-preserver-spaces="true">can help expedite</span><span data-preserver-spaces="true"> the setup process.</span></p>
								</div>
				</div>
					</div>
    `,
		slug: 'support-board',
		logoPath: '/logos/supportboard.jpg'
	}, {
		title: 'RingCentral',
		listDescription: 'User interactions with the RingCentral chat widget can be tracked using GTM and this event listener.',
		code: `<script>
// Initialize _chatq array if not already defined
var _chatq = window._chatq || [];
window._chatq = _chatq;

// List of RingCentral event names to track
var ringCentralEvents = [
"button_shown",
"chat_engaged",
"chat_shown",
"chat_closed",
"invitation_shown",
"message_received",
"message_sent",
"started",
"trigger_activated",
"trigger_executed",
"item_shown"
];

// Register event handlers for each RingCentral event
ringCentralEvents.forEach(function(eventName) {
_chatq.push(["_onEvent", eventName, function(data) {
// Push data to dataLayer with event-specific information
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "ringCentralEvents",
rcEventType: eventName,
triggerId: data.trigger_id || null,
triggerLabel: data.trigger_label || null,
triggerHumanId: data.trigger_human_id || null,
triggerContinuation: data.trigger_continuation || null,
mode: data.mode || null,
itemId: data.item_id || null,
itemLabel: data.item_label || null,
itemHumanId: data.item_human_id || null,
itemType: data.item_type || null
});
}]);
});
</script>`,
		description: `
<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  RingCentral Ring CX Interactions as Events In GA4, etc., with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">You can use the <a href="https://www.ringcentral.com/ringcx.html" target="_blank" rel="noopener">RingCentral CX</a> event listener script and Google Tag Manager (GTM) to track your website visitors’ interactions with the RingCentral RingCX chat widget as events in tools like Google Analytics (GA4), Piwik Pro, etc.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">By implementing the steps outlined below, </span><span data-preserver-spaces="true">you’ll</span><span data-preserver-spaces="true"> be able to</span><span data-preserver-spaces="true"> collect actionable insights and improve your marketing data.</span></p>
<p>&nbsp;</p>
<h3><span data-preserver-spaces="true">Step 1: Add the Event Listener Script to GTM</span></h3>
<p>&nbsp;</p>
<p><span>Start by creating a new&nbsp;<strong>Custom HTML Tag</strong>&nbsp;in GTM. Copy and paste the provided RingCentral CX event listener script into this tag. Assign the tag a name and set its trigger to&nbsp;<strong>DOM Ready</strong> to ensure it fires once the necessary elements have loaded on the page.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong> <span data-preserver-spaces="true">Using the</span><span data-preserver-spaces="true"> DOM Ready trigger type ensures that the event listener is active only when the RingCentral RingCX chat widget </span><span data-preserver-spaces="true">is fully initialized</span><span data-preserver-spaces="true">.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">This event listener script registers various user interactions with the RingCentral chat widget and pushes a dataLayer event with the name ringCentralEvents. Some of the interactions it tracks include:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">button_shown:</span></strong><span data-preserver-spaces="true"> When the RingCX chat button is displayed.</span></li>
<li><strong><span data-preserver-spaces="true">chat_engaged:</span></strong><span data-preserver-spaces="true"> When a visitor engages with the chat.</span></li>
<li><strong><span data-preserver-spaces="true">message_sent/message_received:</span></strong> <span data-preserver-spaces="true">For</span><span data-preserver-spaces="true"> tracking sent and received messages.</span></li>
<li><strong><span data-preserver-spaces="true">trigger_activated:</span></strong><span data-preserver-spaces="true"> When a trigger </span><span data-preserver-spaces="true">is executed</span><span data-preserver-spaces="true">.</span></li>
<li><strong><span data-preserver-spaces="true">chat_shown/chat_closed:</span></strong><span data-preserver-spaces="true"> Tracks when a chat client is created and </span><span data-preserver-spaces="true">shown,</span><span data-preserver-spaces="true"> or when a client closes and leaves a chat.</span></li>
<li><span data-preserver-spaces="true">invitation_shown</span></li>
<li><span data-preserver-spaces="true">item_shown, etc.</span></li>
</ul>
<p><span data-preserver-spaces="true">The dataLayer event also includes additional dataLayer keys like triggerId, itemType, and mode to provide more context about each interaction.</span></p>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, create a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM. Use “<strong>ringCentralEvents</strong></span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> as the event name for the trigger. </span><span data-preserver-spaces="true">This</span><span data-preserver-spaces="true"> ensures the trigger fires for all chat interactions </span><span data-preserver-spaces="true">logged by the event listener</span><span data-preserver-spaces="true">.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Set Up DataLayer Variables in GTM</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To extract detailed information about the interactions, create the following </span><strong><span data-preserver-spaces="true">Data Layer Variables</span></strong><span data-preserver-spaces="true"> in GTM:</span></p>
<ul>
<li>
<ul>
<li><strong><span data-preserver-spaces="true">rcEventType</span></strong><span data-preserver-spaces="true">Provides the type of interaction or event, such as message_sent, chat_engaged, etc.</span></li>
<li><strong><span data-preserver-spaces="true">triggerId</span></strong><span data-preserver-spaces="true">Contains the unique identifier for the trigger.</span></li>
<li><strong><span data-preserver-spaces="true">triggerLabel</span></strong><span data-preserver-spaces="true">Describes the label of the activated trigger.</span></li>
<li><strong><span data-preserver-spaces="true">triggerHumanId</span></strong><span data-preserver-spaces="true">Represents the human-readable identifier for the trigger.</span></li>
<li><strong><span data-preserver-spaces="true">triggerContinuation</span></strong><span data-preserver-spaces="true">Indicates whether the trigger is part of a continuation flow.</span></li>
<li><strong><span data-preserver-spaces="true">itemId</span></strong><span data-preserver-spaces="true">Refers</span><span data-preserver-spaces="true"> to the ID of the specific item associated with the event.</span></li>
<li><strong><span data-preserver-spaces="true">itemType</span></strong><span data-preserver-spaces="true">Specifies the type of item involved, such as </span><span data-preserver-spaces="true">button</span><span data-preserver-spaces="true"> or message.</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">These variables enable you to capture granular details about user interactions, allowing for precise tracking and reporting.</span></p>
<h3><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Attach Triggers</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">With the variables and triggers in place, the next step is </span><span data-preserver-spaces="true">to create marketing tags or pixels in GTM</span><span data-preserver-spaces="true"> (e.g., Google Analytics GA4 tags).</span><span data-preserver-spaces="true"> Attach the custom event trigger (ringCentralEvents) to these tags, and use the variables you set up to add detailed context about the </span><span data-preserver-spaces="true">events </span><span data-preserver-spaces="true">being tracked</span><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">For instance, in a GA4 Event Tag configuration, you can send rcEventType as the event name and include additional parameters like triggerId and itemType as custom dimensions or metrics.</span></p>
<p><strong>Extra Implementation Notes:</strong></p>
<p><span>The RingCentral CX event listener can be utilized with other Tag Management Solutions (TMS) besides GTM. The implementation’s fundamental principles remain the same, making it versatile for different platforms.</span></p>
<p><span>To expedite your setup, scroll down this resource page to download a&nbsp;<strong>GTM recipe template</strong>. This template can be customized to streamline the process of tracking RingCX chat widget interactions.</span></p>
								</div>
				</div>
					</div>
`,
		slug: 'ringcentral',
		logoPath: '/logos/ringcentral.jpg'
	}, {
		title: 'UserLane',
		listDescription: 'Execute tags and capture data whenever a user engages with the UserLane widget on your website.',
		code: `<script>
// Ensure the Userlane object is available
if (typeof Userlane === 'function') {
// Handler for when a Guide is started
Userlane('onStart', function(userlaneId, user) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'userLaneActivity',
'userLaneAction': 'onStart',
'guideId': userlaneId,
'userId': user.id || null,
'userName': user.name || null,
'userEmail': user.email || null
// Add other user properties as needed
});
});

// Handler for when a Guide is completed
Userlane('onComplete', function(userlaneId, user) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'userLaneActivity',
'userLaneAction': 'onComplete',
'guideId': userlaneId,
'userId': user.id || null,
'userName': user.name || null,
'userEmail': user.email || null
// Add other user properties as needed
});
});

// Handler for when a Guide is exited
Userlane('onExit', function(userlaneId, user, stepIndex) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'userLaneActivity',
'userLaneAction': 'onExit',
'guideId': userlaneId,
'userId': user.id || null,
'userName': user.name || null,
'userEmail': user.email || null,
'stepIndex': stepIndex
// Add other user properties as needed
});
});
} else {
console.error('Userlane is not available.');
}
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Userlane In-App Messaging and Onboarding Flow with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This guide will show you how to use the <a href="https://www.userlane.com/" target="_blank" rel="noopener">Userlane</a> event listener script </span><span data-preserver-spaces="true">in conjunction</span><span data-preserver-spaces="true"> with Google Tag Manager (GTM) to track website visitors’ interactions with the Userlane in-app messaging or onboarding flow. By integrating this data into analytics tools like Google Analytics (GA4), Piwik Pro, or others, you can gain valuable insights into how users engage with your Userlane experiences.</span></p>
<h3><span data-preserver-spaces="true">Step 1: Add the Userlane Event Listener Script to GTM</span></h3>
<p><span data-preserver-spaces="true">To get started, copy the provided Userlane event listener script and create a new tag in Google Tag Manager:</span></p>
<ol>
<li><span data-preserver-spaces="true">Choose </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true"> as the tag type.</span></li>
<li><span data-preserver-spaces="true">Paste the Userlane event listener script into the tag.</span></li>
<li><span data-preserver-spaces="true">Name the tag appropriately, such as “Userlane Event Listener.”</span></li>
<li><span data-preserver-spaces="true">Set the trigger type to </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> to ensure the listener activates after </span><span data-preserver-spaces="true">the page has loaded</span><span data-preserver-spaces="true">.</span></li>
</ol>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true"> Firing the tag on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> ensures that the Userlane object is fully available and prevents errors.</span></p>
<p><span data-preserver-spaces="true">The event listener script listens for Userlane guide events—such as when a guide </span><span data-preserver-spaces="true">is started</span><span data-preserver-spaces="true">, completed, or exited—and pushes a userLaneActivity event into the dataLayer. Along with the event name, it tracks key attributes of user interactions, such as:</span></p>
<ul>
<li><span data-preserver-spaces="true">userLaneAction: Indicates the type of interaction (e.g., “onStart,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“onComplete,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“onExit”).</span></li>
<li><span data-preserver-spaces="true">guideId: The ID of the guide.</span></li>
<li><span data-preserver-spaces="true">userId, userName, and userEmail: Details about the user interacting with the guide.</span></li>
<li><span data-preserver-spaces="true">stepIndex (for “onExit</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> ): Tracks the last step index reached.</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></h3>
<p><span data-preserver-spaces="true">Next, set up a custom event trigger in GTM to capture the </span><span data-preserver-spaces="true">userLaneActivity</span><span data-preserver-spaces="true"> events:</span></p>
<ol>
<li><span data-preserver-spaces="true">Navigate to the </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> section in GTM.</span></li>
<li><span data-preserver-spaces="true">Create a new trigger and select </span><strong><span data-preserver-spaces="true">Custom Event</span></strong><span data-preserver-spaces="true"> as the trigger type.</span></li>
<li><span data-preserver-spaces="true">In the </span><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true"> field, enter “userLaneActivity”.</span></li>
<li><span data-preserver-spaces="true">Save the trigger and give it a descriptive name, such as “Userlane Activity Trigger.”</span></li>
</ol>
<p><span data-preserver-spaces="true">This trigger will ensure your tags fire whenever a Userlane interaction </span><span data-preserver-spaces="true">is tracked</span><span data-preserver-spaces="true">.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define Data Layer Variables</span></h3>
<p><span data-preserver-spaces="true">To capture specific details about Userlane interactions, create the following variables in GTM:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">userLaneAction</span></strong><span data-preserver-spaces="true">: Returns the type of interaction/event that occurred, such as “onStart,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“onComplete,</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> or “onExit.”</span></li>
<li><strong><span data-preserver-spaces="true">guideId</span></strong><span data-preserver-spaces="true">: Contains the unique ID of the guide.</span></li>
<li><strong><span data-preserver-spaces="true">userId</span></strong><span data-preserver-spaces="true">: Stores the user’s unique identifier.</span></li>
<li><strong><span data-preserver-spaces="true">userName</span></strong><span data-preserver-spaces="true">: Captures the user’s name (if available).</span></li>
<li><strong><span data-preserver-spaces="true">userEmail</span></strong><span data-preserver-spaces="true">: Includes the user’s email address (if available).</span></li>
</ul>
<p><span data-preserver-spaces="true">For each variable, select </span><strong><span data-preserver-spaces="true">Data Layer Variable</span></strong><span data-preserver-spaces="true"> as the variable type and use the respective keys above as the </span><strong><span data-preserver-spaces="true">Data Layer Variable Name</span></strong><span data-preserver-spaces="true">.</span></p>
<h3><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h3>
<p><span data-preserver-spaces="true">With the triggers and variables in place, the next step is to set up your marketing tags and pixels to utilize the captured data:</span></p>
<ol>
<li><span data-preserver-spaces="true">Create tags for your analytics platforms (e.g., Google Analytics [GA4], Piwik Pro, etc.).</span></li>
<li><span data-preserver-spaces="true">Attach the </span><strong><span data-preserver-spaces="true">Userlane Activity Trigger</span></strong><span data-preserver-spaces="true"> you created earlier to each tag.</span></li>
<li><span data-preserver-spaces="true">Use the variables (e.g., userLaneAction, guideId, userId) in your tag configurations to enrich your event data with additional context about Userlane interactions.</span></li>
</ol>
<p><strong>Additional Notes:</strong></p>
<p><span data-preserver-spaces="true">The Userlane event listener is </span><strong><span data-preserver-spaces="true">Tag Manager agnostic</span></strong><span data-preserver-spaces="true">, </span><span data-preserver-spaces="true">meaning </span><span data-preserver-spaces="true">it</span><span data-preserver-spaces="true"> can be implemented</span><span data-preserver-spaces="true"> in other Tag Management Solutions (TMS) besides GTM. Regardless of the TMS used, the implementation principles remain the same.</span></p>
<p>By scrolling down this page, you’ll find a downloadable GTM recipe template that could streamline the implementation process. Customize and import this recipe to easily start tracking Userlane in-app messaging and onboarding flow interactions.</p>
								</div>
				</div>
					</div>`,
		slug: 'userlane',
		logoPath: '/logos/userlane.jpg'
	}, {
		title: 'Smartsupp Chat',
		listDescription: 'Use this Smartsupp event listener to measure engagement with the Smartsupp chat widget on your website.',
		code: `<script>
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
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Smartsupp Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Enhance your marketing data with this Smartsupp event listener that automatically pushes Smartupps activity into the dataLayer for use in your analytics.</p>
<p>To capture this data in Analytics, such as Google Analytics (Universal and GA4), Mixpanel, Piwik Pro, etc. You can use Google Tag manager to make this possible and seamless.</p>
<p>The first step is to create a new tag in Google Tag Manager, a custom HTML tag type (copy and paste this Smartsupp chat event listener code in this tag), give it a name, and set it to trigger on pageview or DOM ready.</p>
<p>💡 Pro Tip: fire on DOM ready if you implemented the Smartsupp chat widget through GTM).</p>
<p>What this event listener script does, is to listen for Smartsupp events (message sent and message received), then fire a dataLayer event <strong>[SmartsuppChatEvent]</strong> about the event and its attributes (such as visitorID, chatAction, ChatID, messageID, etc.)</p>
<p>The next step is to create the variables that you need;<br>
<strong>[chatAction]</strong> –&gt; tells you the action type, message sent or received<br>
<strong>[chatBoxID]</strong> –&gt; returns the chat widget ID<br>
<strong>[visitorID]</strong> –&gt; has the value of the visitor ID in Smartsupp<br>
<strong>[messageID]</strong> –&gt; which gives the unique ID of the message<br>
<strong>[ChatSubType]</strong> –&gt; returns the chat type, bot, contact, etc.<br>
<strong>[userLang]</strong> –&gt; is the language of the user browser</p>
<p>These variables can help you streamline your trigger with trigger conditions and can also be used to enrich your event data.</p>
<p>To complete the implementation, create a GTM trigger <strong>[SmartsuppChatEvent]</strong> which should fire your tag on all Smartsupp events</p>
<p>💡 To streamline your trigger in Google Tag Manager, use the variables you created to achieve your needs.</p>
								</div>
				</div>
					</div>`,
		slug: 'smartsupp-chat',
		logoPath: '/logos/smartsupp.jpg'
	}, {
		title: 'Crisp Chat',
		listDescription: 'If you\'re using Crisp chat on your website, you can conveniently track user interactions with your Crisp chat widget.',
		code: `<script type="text/javascript">
$crisp.push(["on", "chat:initiated", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'chat initiated',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "chat:opened", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'chat opened',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "chat:closed", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'chat closed',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "message:sent", function(event){ 
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'message sent',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "message:received", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'message received',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "user:email:changed", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'visitor email added',
'CrispSessionID': $crisp.get("session:identifier"),
'CrispEmail': $crisp.get("user:email"),
'CrispPhone': $crisp.get("user:phone")
});
}]);

$crisp.push(["on", "helpdesk:queried", function(event){
dataLayer.push({
'event': 'CrispInteractions', 
'chatAction': 'Helpdesk Queried'
});
}]);
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Crisp Chat Interaction with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">You can use Google Tag Manager and this event listener script to push Crisp chat interactions data to your analytics (Google Analytics, Piwik Pro, Mixpanel, etc.)</span></p>
<p><span data-preserver-spaces="true">These event listener code helps emit DataLayer events with relevant chat information when users interact with your embedded Crisp chat widget or helpdesk.</span></p>
<p><span data-preserver-spaces="true">These events are;</span></p>
<ol>
<li><span data-preserver-spaces="true">Chat initiated</span></li>
<li><span data-preserver-spaces="true">Chat widget opened and closed</span></li>
<li><span data-preserver-spaces="true">Message sent and received</span></li>
<li><span data-preserver-spaces="true">Capture user email</span></li>
<li><span data-preserver-spaces="true">Queried Crisp helpdesk</span></li>
</ol>
<p><span data-preserver-spaces="true">To measure Crisp interactions and conversions, you have to copy the event listener, then create a custom HTML tag in GTM where you’ll paste the code.</span></p>
<p><span data-preserver-spaces="true">Add a pageview or DOM ready (recommended) trigger to the custom HTML tag you created.</span></p>
<p><span data-preserver-spaces="true">💡&nbsp;</span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;fire on DOM ready if you implemented the Crisp chat widget through GTM).</span></p>
<p><span data-preserver-spaces="true">The next step is to create a custom event trigger with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[CrispInteractions]</span></strong><span data-preserver-spaces="true">&nbsp;that happens for every Crisp Chat interaction.</span></p>
<p><span data-preserver-spaces="true">You can streamline your event to fire for specific Crisp interactions by creating dataLayer variables that return the value of what Crisp interaction occurred.</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; tells us what Crisp interaction happended, start a chat, chat widget opened, etc.</span></p>
<p><strong><span data-preserver-spaces="true">[CrispSessionID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; gives the Crisp session ID</span></p>
<p><strong><span data-preserver-spaces="true">[CrispEmail]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; The user email if they have submitted it before</span></p>
<p><strong><span data-preserver-spaces="true">[CrispPhone]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user phone number</span></p>
<p><span data-preserver-spaces="true">To push these data to your analytics or marketing platform, you’ll have to connect your marketing tag/pixels to the generic or specific trigger, depending on your needs.</span></p>
<p><span data-preserver-spaces="true">Having these data in your analytics, you’ll be to make analyses such as;&nbsp;</span></p>
<ol>
<li><span data-preserver-spaces="true">How often do users interact with your Crisp chat widget</span></li>
<li><span data-preserver-spaces="true">How many complete a chat after initiating one</span></li>
<li><span data-preserver-spaces="true">What’s the impact on your business KPIs such as conversions, etc.</span></li>
<li><span data-preserver-spaces="true">Build a funnel starting with opening a Crisp chat, etc.</span></li>
</ol>
								</div>
				</div>
					</div>`,
		slug: 'crisp-chat',
		logoPath: '/logos/crisp.jpg'
	}, {
		title: 'Pure Chat',
		listDescription: 'Understand how users interact with the Pure chat widget embedded in your website and make better decisions.',
		code: `<script>
// visitor starts a Chat
purechatApi.on('chat:start', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'chat_started',
'chatId': args.chatboxId,
'PureChat_User_Name': args.name,
'PureChat_User_Email': args.email,
'PureChat_User_Phone': args.phoneNumber,
'PureChat_User_1stMessage': args.question
});
});
// visitor ends a chat
purechatApi.on('chat:end', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'chat_ended',
'chatId': args.chatboxId,
'PureChat_User_Name': args.name,
'PureChat_User_Email': args.email,
'PureChat_User_Phone': args.phoneNumber,
'PureChat_User_1stMessage': args.question,
'chatTranscriptID': args.transcriptId
});
});
// Visitor has rated the chat
purechatApi.on('chat:rate', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'visitor_rate_chat',
'chatId': args.chatboxId,
'PureChat_User_Name': args.name,
'PureChat_User_Email': args.email,
'PureChat_User_Phone': args.phoneNumber,
'PureChat_User_1stMessage': args.question,
'chatTranscriptID': args.transcriptId,
'chatRating': args.rating
});
});
// Visitor collapses chat box
purechatApi.on('chatbox:collapse', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'Chatbox was collapsed',
'chatId': args.chatboxId
});
});

// Visitor expands chatbox
purechatApi.on('chatbox:expand', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'Chatbox was expanded',
'chatId': args.chatboxId
});
});

// Chat box popped-out into new window
purechatApi.on('chatbox:poppedOut', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'Chatbox was popped out into a new window',
'chatId': args.chatboxId
});
});
// Fired whenever a visitor restarts the chat box after a closed chat
purechatApi.on('chatbox:restart', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'Chat box was restarted by the visitor',
'chatId': args.chatboxId
});
});
// Fired whenever a visitor sends an email from the chat box when no operators are available.
purechatApi.on('email:send', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'An email was sent while you were unavailable',
'chatId': args.chatboxId,
'PureChat_User_Name': args.name,
'PureChat_User_Email': args.email,
'PureChat_User_Phone': args.phoneNumber,
'PureChat_User_1stMessage': args.question
});
});
// Fired whenever a visitor detail changes
purechatApi.on('email:send', function (args) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'pure chat interaction',
'chatAction': 'visitor detail has changed',
'chatId': args.chatboxId,
'PureChat_User_Name': args.name,
'PureChat_User_Email': args.email,
'PureChat_User_Phone': args.phoneNumber,
'PureChat_User_1stMessage': args.question
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Pure Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using this Pure chat event listener and Google Tag Manager, you can capture rich event data of user interactions with your Pure chat widget and seamlessly make them available in your analytics tools.</span></p>
<p><span data-preserver-spaces="true">To start this implementation in Google Tag Manager, create a new custom HTML tag type, copy the Pure Chat API event listener code, paste it in the tag and add a pageview or DOM Ready (recommended) trigger.</span></p>
<p><span data-preserver-spaces="true">💡&nbsp;</span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;fire on DOM ready if you implemented the Pure chat through Google Tag Manager</span></p>
<p><span data-preserver-spaces="true">What the code does is to listen for Pure Chat interactions and then push the event in the dataLayer, these events are;</span></p>
<ol>
<li><span data-preserver-spaces="true">Start and end a chat</span></li>
<li><span data-preserver-spaces="true">rate a chat</span></li>
<li><span data-preserver-spaces="true">Expand and collapse a chat widget</span></li>
<li><span data-preserver-spaces="true">restart a chat</span></li>
<li><span data-preserver-spaces="true">view a chat widget in a popup state</span></li>
<li><span data-preserver-spaces="true">when a user sends an email when an operator isn’t available</span></li>
<li><span data-preserver-spaces="true">when a visitor detail changes</span></li>
</ol>
<p><span data-preserver-spaces="true">To trigger your tags when these events happen, you’ll have to create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[pure chat interaction]</span></strong><span data-preserver-spaces="true">, which gets fired on all Pure chat activity.</span></p>
<p><span data-preserver-spaces="true">Alongside the event, there are dataLayer variables you can create to understand what specific interaction occurred and what data, Pure Chat has about the user.</span></p>
<p><span data-preserver-spaces="true">These variables include;</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the chat action</span></p>
<p><strong><span data-preserver-spaces="true">[chatId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the Pure chat chatbox ID</span></p>
<p><strong><span data-preserver-spaces="true">[PureChat_User_Name]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user name if they’ve submitted a Pure chat form</span></p>
<p><strong><span data-preserver-spaces="true">[PureChat_User_Email]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user email if they’ve submitted a Pure chat form</span></p>
<p><strong><span data-preserver-spaces="true">[PureChat_User_Phone]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user phone if they’ve submitted a Pure chat form</span></p>
<p><strong><span data-preserver-spaces="true">[PureChat_User_1stMessage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the user 1st message</span></p>
<p><strong><span data-preserver-spaces="true">[chatTranscriptID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the Pure chat transcript ID</span></p>
<p><strong><span data-preserver-spaces="true">[chatRating]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; the Pure chat transcript ID</span></p>
<p><span data-preserver-spaces="true">You can then create a generic trigger or specific one using the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable to listen for specific Pure chat interactions.</span></p>
<p><span data-preserver-spaces="true">If you are using the generic event listener&nbsp;</span><strong><span data-preserver-spaces="true">[pure chat interaction],&nbsp;</span></strong><span data-preserver-spaces="true">you can use the dataLayer variable you created to enrich the data,&nbsp;</span></p>
<p><span data-preserver-spaces="true">using them as parameters of the event, and dynamically capture information about each event, the chat interaction type, and other insightful data for making analysis.</span></p>
<p>With segmentation, you can use the data in analytics like Google Analytics, Piwik Pro, Mixpanel, etc. in measuring how the user interacts with the Pure chat widget, how the live chat impacts website engagement, your marketing funnel, conversion, and other business KPIs.</p>
								</div>
				</div>
					</div>`,
		slug: 'pure-chat',
		logoPath: '/logos/purechat.jpg'
	}, {
		title: 'Drift Chat',
		listDescription: 'Are you using Drift chat on your website? With this event listener, you can measure chat interactions.',
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Drift Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Drift chat interactions in your analytics tools give you valuable insights into the impact these chat interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Drift chat activity tracking, you’ll need Google Tag Manager and the Helpcrunch chat event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the Drift chat script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[driftchat_action]</span></strong><span data-preserver-spaces="true">, which gets fired on all chat activity</span></p>
<p><span data-preserver-spaces="true">To get more information on what chat activity happened, you’ll need to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">User started a new conversation</span></li>
<li><span data-preserver-spaces="true">User started a new conversation</span></li>
<li><span data-preserver-spaces="true">User opened campaign</span></li>
<li><span data-preserver-spaces="true">User clicked campaign</span></li>
<li><span data-preserver-spaces="true">User dismissed campaign</span></li>
<li><span data-preserver-spaces="true">User submitted campaign</span></li>
<li><span data-preserver-spaces="true">Chat widget opened</span></li>
<li><span data-preserver-spaces="true">Chat widget closed</span></li>
<li><span data-preserver-spaces="true">Playbook fired</span></li>
<li><span data-preserver-spaces="true">Playbook clicked</span></li>
<li><span data-preserver-spaces="true">Playbook dismissed</span></li>
<li><span data-preserver-spaces="true">User wants to schedule a meeting</span></li>
<li><span data-preserver-spaces="true">User booked a meeting</span></li>
<li><span data-preserver-spaces="true">User provided a phone number</span></li>
<li><span data-preserver-spaces="true">First interaction</span></li>
<li><span data-preserver-spaces="true">Welcome Message is opened</span></li>
<li><span data-preserver-spaces="true">Welcome Message is closed</span></li>
<li><span data-preserver-spaces="true">User clicked a button</span></li>
<li><span data-preserver-spaces="true">User email captured</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Drift chat interactions.</span></p>
<p><span data-preserver-spaces="true">Also, if you need more information on certain interactions, there are dataLayer variables you’ll have to create, which are available on some chat interactions</span></p>
<p><strong><span data-preserver-spaces="true">[chatWidgetID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat widget ID, it’s available on all events</span></p>
<p><strong><span data-preserver-spaces="true">[chatSessionID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the Drift chat website session ID, it’s also available on all events</span></p>
<p><strong><span data-preserver-spaces="true">[chatConversationID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the Drift conversation ID, available on certain events</span></p>
<p><strong><span data-preserver-spaces="true">[chatPlaybookID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the Playbook ID</span></p>
<p><strong><span data-preserver-spaces="true">[chatInteractionID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat interaction ID</span></p>
<p><strong><span data-preserver-spaces="true">[chatCampaignID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the campaign ID</span></p>
<p><strong><span data-preserver-spaces="true">[chatTeamMemberID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the team member ID, available on meeting request and booking chat events</span></p>
<p><strong><span data-preserver-spaces="true">[chatTeamMemberName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the team member name, available on meeting request and booking chat events</span></p>
<p><strong><span data-preserver-spaces="true">[chatMeetingTime]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the time the meeting was booked, available on meeting booking chat events</span></p>
<p><strong><span data-preserver-spaces="true">[chatMeetingDuration]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the duration of the meeting booked, available on meeting booking chat events</span></p>
<p><strong><span data-preserver-spaces="true">[chatMeetingTimeZone]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the duration of the meeting that was booked, available on meeting booking chat events</span></p>
<p><strong><span data-preserver-spaces="true">[chatAuthorID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the timezone of the meeting</span></p>
<p><strong><span data-preserver-spaces="true">[chatquestionID]</span></strong><span data-preserver-spaces="true"> –&gt; Returns the question ID, when a user clicks on the bot option button or replies to a bot question</span></p>
<p><strong><span data-preserver-spaces="true">[chatVisitorEmail]</span></strong><span data-preserver-spaces="true"> –&gt; Returns the user email, available in the email captured chat event</span></p>
<p><strong><span data-preserver-spaces="true">[chatButtonText]</span></strong><span data-preserver-spaces="true"> –&gt; Returns the user email, available in the email captured chat event</span></p>
<p><span data-preserver-spaces="true">Connect your analytics tags to the trigger and use the dataLayer variables you created to push more information about each Olark chat interaction.</span></p>
<p><span data-preserver-spaces="true">You should ignore them and don’t use them for triggering your tags.</span></p>
<p><span data-preserver-spaces="true">Having the data in your analytics tools, such as Google Analytics, Mixpanel, Piwik Pro, Heap, Fullstory, Amplitude, etc. gives you actionable insights into your marketing and customer support strategy.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		code: `<script>
drift.on('ready', function (api, eventData) {
// eventData content described on the "Configuration and Settings" page.
// fires when a user starts a conversation
window.drift.on("startConversation", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User started a new conversation",
'chatConversationID': data.conversationId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
//fires when GDPR is clicked
window.drift.on("gdprClicked", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User started a new conversation",
'chatGDPRAccepted': data.accepted,
'chatUserID': data.endUser,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when campaign begins.
window.drift.on("campaign:open", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User opened campaign",
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when a call to action (CTA) is clicked.
window.drift.on("campaign:click", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User clicked campaign",
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when a user closes a campaign message.
window.drift.on("campaign:dismiss", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User dismissed campaign",
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when a user starts a chat or submits an email capture of a campaiggn
window.drift.on("campaign:submit", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User submitted campaign",
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when a chat widget is opened
window.drift.on('chatOpen', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Chat widget opened",
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when a chat widget is closed
window.drift.on('chatClose', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Chat widget closed",
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires whenever a leadbot playbook fires to a site visitor.
window.drift.on("conversation:playbookFired", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Playbook fired",
'chatConversationID': data.conversationId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires whenever a leadbot playbook is clicked by the visitor.
window.drift.on("conversation:playbookClicked", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Playbook clicked",
'chatConversationID': data.conversationId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires whenever a leadbot playbook is dismissed by the visitor.
window.drift.on("conversation:playbookDismissed", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Playbook dismissed",
'chatConversationID': data.conversationId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the schedule meeting card is pushed to a conversation (or a "calendar drop")
window.drift.on("scheduling:requestMeeting", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User wants to schedule a meeting",
'chatTeamMemberID': data.teamMember.id,
'chatTeamMemberName': data.teamMember.name,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the user books a meeting with a member of your team
window.drift.on("scheduling:meetingBooked", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User booked a meeting",
'chatTeamMemberID': data.teamMember.id,
'chatTeamMemberName': data.teamMember.name,
'chatMeetingTime': data.meeting.time,
'chatMeetingDuration': data.meeting.duration,
'chatMeetingTimeZone': data.meeting.timeZone,
'chatConversationID': data.conversationId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the user phone number is captureD
window.drift.on("phoneCapture", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User provided a phone number",
'chatAuthorID': data.authorId,
'chatMessageID': data.messageId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires for the first site visitor message in each unique conversation thread, or each distinct conversation ID.
window.drift.on("conversation:firstInteraction", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "First interaction",
'chatAuthorID': data.authorId,
'chatMessageID': data.messageId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the welcome message is open
window.drift.on('welcomeMessage:open', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Welcome Message is opened",
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the welcome message is closed
window.drift.on('welcomeMessage:close', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "Welcome Message is closed",
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
// fires when the user clicks on a button in chat as a response to a question
window.drift.on("conversation:buttonClicked", function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User clicked a button",
'chatConversationID': data.conversationId,
'chatPlaybookID': data.playbookId,
'chatInteractionID': data.interactionId,
'chatCampaignID': data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId,
'chatquestionID': data.questionId,
'chatButtonText': data.buttonBody,
'chatMessageID': data.messageId,
'chatAuthorID': data.authorId
});
});
window.drift.on("emailCapture", function (e) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'driftchat_action',
'chatAction': "User email captured",
'chatVisitorEmail': e.data.email,
'chatConversationID': e.data.conversationId,
'chatPlaybookID': e.data.playbookId,
'chatInteractionID': e.data.interactionId,
'chatCampaignID': e.data.campaignId,
'chatSessionID': drift_session_id,
'chatWidgetID': drift.embedId
});
});
});
</script>`,
		slug: 'drift-chat',
		logoPath: '/logos/drift.jpg'
	}, {
		title: 'OnWeb Chat',
		listDescription: `Get insights into how users interact with your OnWeb chat widget using this event listener and GTM.`,
		code: `<script>
// executed when a visitor clicks on the chat widget
onWebChat.set("onClick",function(){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'onWebChat_Action',
'chatAction': 'Clicked Chat Widget',
'ChatStatus': onWebChat.get("status"),
'chatUserName': onWebChat.get("name"),
'chatUserEmail': onWebChat.get("email"),
'chatUserPhone': onWebChat.get("phone")
}); 
}); 
// executed when the chat widget is maximized
onWebChat.set("onMaximize",function(){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'onWebChat_Action',
'chatAction': 'Maximized Chat Widget',
'ChatStatus': onWebChat.get("status"),
'chatUserName': onWebChat.get("name"),
'chatUserEmail': onWebChat.get("email"),
'chatUserPhone': onWebChat.get("phone")
}); 
}); 
// executed when the chat widget is minimized
onWebChat.set("onMinimized",function(){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'onWebChat_Action',
'chatAction': 'Minimized Chat Widget',
'ChatStatus': onWebChat.get("status"),
'chatUserName': onWebChat.get("name"),
'chatUserEmail': onWebChat.get("email"),
'chatUserPhone': onWebChat.get("phone")
}); 
});
// executed when a trigger is activated
onWebChat.set("onTrigger",function(){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'onWebChat_Action',
'chatAction': 'Trigger Activated',
'ChatStatus': onWebChat.get("status"),
'chatUserName': onWebChat.get("name"),
'chatUserEmail': onWebChat.get("email"),
'chatUserPhone': onWebChat.get("phone")
}); 
}); 
// executed when a visitor starts to write
onWebChat.set("onStartWriting",function(){ 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'onWebChat_Action',
'chatAction': 'Visitor is Typing',
'ChatStatus': onWebChat.get("status"),
'chatUserName': onWebChat.get("name"),
'chatUserEmail': onWebChat.get("email"),
'chatUserPhone': onWebChat.get("phone")
}); 
}); 
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  OnWeb Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">In your analytics stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) you can track how users interact with the embedded OnWeb chat widget on your website.</span></p>
<p><span data-preserver-spaces="true">This helps you in understanding the impact these interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">For this implementation, you’ll be using Google Tag Manager and the OnWeb chat event listener script.</span></p>
<p><span data-preserver-spaces="true">The first step will be to copy, and paste the event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the OnWeb chat script through Google Tag Manager, please use the DOM-ready or Window Loaded trigger instead.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[onWebChat_Action]</span></strong><span data-preserver-spaces="true">, which happens on all OnWeb chat activity.</span></p>
<p><span data-preserver-spaces="true">The next step will be creating a DataLayer variable with the key </span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">, which gives us more information on the type of OnWeb chat interaction that happened.</span></p>
<p>the <strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li>Clicked Chat Widget</li>
<li>Maximized Chat Widget</li>
<li>Minimized Chat Widget</li>
<li>Trigger Activated</li>
<li>Visitor is Typing</li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> dataLayer variable as an event parameter or for streamlining your trigger to fire on specific OnWeb chat interactions.</span></p>
<p>Some of the optional DataLayer variables, you might have to create are;</p>
<p><strong>[ChatStatus]</strong> -&gt; Gives you info on the chat status, and it’s available on all OnWeb chat interactions</p>
<p><strong>[chatUserName]</strong> -&gt; Captures the website visitor’s name, if it has been provided during their chat session</p>
<p><strong>[chatUserEmail]</strong> -&gt; Captures the website visitor’s email, if it has been provided during their chat session</p>
<p><strong>[chatUserPhone]</strong> -&gt; Captures the website visitor’s phone number, if it has been provided during their chat session</p>
<p>Finally, to complete the implementation, you’ll have to add your marketing tags and attach the OnWeb chat trigger.</p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'onweb-chat',
		logoPath: '/logos/onweb.jpg'
	}, {
		title: 'Chatlio',
		listDescription: `Enhance your event data by tracking users' interactions with your embedded Chatlio chat widget.`,
		code: `<script>
//fires When the widget is collapsed
document.addEventListener("chatlio.collapsed", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'chat widget minified'
});
});
//fires When the widget is expanded
document.addEventListener("chatlio.expanded", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'chat widget expanded'
});
});
//fires When the widget fires a triggered message
document.addEventListener("chatlio.trigger", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'chat trigger message shown'
});
});
//fires When the visitor sends their first message to you
document.addEventListener("chatlio.firstMessageSent", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'visitor sends first message'
});
});
//fires When the visitor sends message
document.addEventListener("chatlio.messageSent", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'visitor sends message'
});
});
//fires When the visitor receives message
document.addEventListener("chatlio.messageReceived", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'visitor receives message'
});
});
//fires When the visitors submits the pre-chat form
document.addEventListener("chatlio.preChatInfoSubmitted", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'submits prechat form'
});
});
//fires When the visitor or the operator ends the chat
document.addEventListener("chatlio.conversationEnded", function(event){
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatlio_event',
'chatlio_action': 'conversation ended'
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Chatlio Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">The help of the Chatlio chat event listener with Google Tag Manager allows for effective tracking and measurement of user interactions with the Chatlio chat embedded on your website. By harnessing the insights from this data, you can better understand how these interactions influence your website’s conversion rates.</span></p>
<p><span data-preserver-spaces="true">Whether you utilize Google Tag Manager or Piwik Pro TMS, the event listener transmits Chatlio chat interaction events to various analytics tools, such as Google Analytics (GA4), Mixpanel, PiwikPro, and more.</span></p>
<p><span data-preserver-spaces="true">To initiate the implementation within GTM, create a custom HTML tag and incorporate the Chatlio event listener script. Assign a descriptive name to the tag and set it to trigger on either pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Using the “DOM Ready” trigger is highly recommended.</span></p>
<p><span data-preserver-spaces="true">This script actively listens for user interactions with your website’s embedded Chatlio chat widget, capturing relevant events and their associated attributes and forwarding them to the dataLayer.</span></p>
<p><span data-preserver-spaces="true">The dataLayer event name assigned to all Chatlio chat interactions is “</span><strong><span data-preserver-spaces="true">[chatlio_event]</span></strong><span data-preserver-spaces="true">“.</span></p>
<p><span data-preserver-spaces="true">Next, establish a dataLayer variable to provide additional context for the event. The event variable is defined as follows:</span></p>
<p><strong><span data-preserver-spaces="true">[chatlio_action]</span></strong><span data-preserver-spaces="true">&nbsp;– This variable furnishes further details about the specific type of Chatlio interaction that transpired. Examples of these interactions include:</span></p>
<ul>
<li><span data-preserver-spaces="true">chat widget minified</span></li>
<li><span data-preserver-spaces="true">chat widget expanded</span></li>
<li><span data-preserver-spaces="true">chat trigger message shown</span></li>
<li><span data-preserver-spaces="true">visitor sends first message</span></li>
<li><span data-preserver-spaces="true">visitor sends message</span></li>
<li><span data-preserver-spaces="true">visitor receives message</span></li>
<li><span data-preserver-spaces="true">submits prechat form</span></li>
<li><span data-preserver-spaces="true">conversation ended</span></li>
</ul>
<p><span data-preserver-spaces="true">In the last stage of the instrumentation, you’ll create your measurement tags, add your custom event trigger, apply the relevant variables as needed, preview your setup, and publish them.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'chatlio',
		logoPath: '/logos/chatlio.jpg'
	}, {
		title: 'Freshchat',
		listDescription: `Capture user interactions with your Freshchat Chat widget by implementing this event listener.`,
		code: `<script>
//Fires when the chat widget is closed
window.fcWidget.on("widget:closed", function(resp) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'chat widget closed'
});
});
//Fires when the chat widget is opened
window.fcWidget.on("widget:opened", function(resp) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'chat widget opened'
});
});
// fires when a user has been created
window.fcWidget.on("user:created", function(resp) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'User has been created'
});
});
// fires when a user receives a message
window.fcWidget.on("message:received", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'user receives a message',
'eventData': data
});
});
// fires when a user sends a message
window.fcWidget.on("message:sent", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'user sends a message',
'eventData': data
});
});
// fires when a CSAT is received
window.fcWidget.on("csat:received", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'CSAT received',
'eventData': data
});
});
// fires when the received CSAT is updated
window.fcWidget.on("csat:updated", function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'CSAT updated',
'eventData': data
});
});
// fires after the user downloaded an asset sent by the Agent
window.fcWidget.on("download:file", function(response) {
if (response.success) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'freshChat_Event',
'freshEvent_type': 'file downloaded by the user',
'eventData': response,
'fileURL': response.data.url
});
}
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  FreshChat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using Google Tag Manager or your preferred tag management solution, in conjunction with the FreshChat event listener, you can effectively track and measure user interactions with the FreshChat chat widget on your website. Leveraging the insights derived from this data will provide a better understanding of how these interactions impact your website’s conversion rates and engagement metrics.</span></p>
<p><span data-preserver-spaces="true">Whether you opt for Google Tag Manager or Piwik Pro TMS, the event listener enables you to track FreshChat chat interactions as events in various analytics tools such as Google Analytics (GA4), Mixpanel, PiwikPro, and more.</span></p>
<p><span data-preserver-spaces="true">To initiate the implementation within GTM, create a custom HTML tag and incorporate the FreshChat event listener script. Provide a descriptive name for the tag and set it to trigger on either pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Using the “DOM Ready” trigger is recommended.</span></p>
<p><span data-preserver-spaces="true">This script actively listens for user interactions with the FreshChat chat widget embedded in your website and sends the corresponding events and their attributes to the dataLayer.</span></p>
<p><span data-preserver-spaces="true">The dataLayer event name assigned to all FreshChat chat interactions is “</span><strong><span data-preserver-spaces="true">[freshChat_Event]</span></strong><span data-preserver-spaces="true">“.</span></p>
<p><span data-preserver-spaces="true">Next, set up a dataLayer variable to provide additional context for the event. The event variable is as follows:</span></p>
<p><strong><span data-preserver-spaces="true">[freshEvent_type]</span></strong><span data-preserver-spaces="true">&nbsp;– This variable provides detailed information about the type of FreshChat interaction that occurred. Examples include:</span></p>
<ul>
<li><span data-preserver-spaces="true">chat widget closed</span></li>
<li><span data-preserver-spaces="true">chat widget opened</span></li>
<li><span data-preserver-spaces="true">Chat trigger displayed</span></li>
<li><span data-preserver-spaces="true">User has been created (when they also send their first message)</span></li>
<li><span data-preserver-spaces="true">user receives a message</span></li>
<li><span data-preserver-spaces="true">user sends a message</span></li>
<li><span data-preserver-spaces="true">CSAT received</span></li>
<li><span data-preserver-spaces="true">CSAT updated</span></li>
<li><span data-preserver-spaces="true">file downloaded by the user</span></li>
</ul>
<p><span data-preserver-spaces="true">It would help if you also considered registering the following dataLayer variables, although they do not fire for every event:</span></p>
<p><strong><span data-preserver-spaces="true">[eventData]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This object value contains information about the event that occurred. It is unavailable for open widgets, closed widgets, and user-created FreshChat interactions.</span></p>
<p><strong><span data-preserver-spaces="true">[fileURL]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; This variable includes the file URL of the user-downloaded file. It is only available for “file download” events.</span></p>
<p><span data-preserver-spaces="true">Finally, add your tags to the created trigger, apply the appropriate variables where necessary, preview your changes, and publish them.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'freshchat',
		logoPath: '/logos/freshchat.jpg'
	}, {
		title: 'Message Bird',
		listDescription: `Measure user interactions with the MessageBird widget on your website using this event listener.`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Message Bird Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Utilise Google Tag Manager along with the Message Bird chat event listener script to track website interactions with your Message Bird chat widget as analytics events within your analytics stacks (Google Analytics, Piwik Pro, Mixpanel, etc.).</span></p>
<p><span data-preserver-spaces="true">Implementing this event listener code in Google Tag Manager is straightforward, which helps facilitate the emission of DataLayer events when users minimise and maximise the embedded Message Bird chat widget on your website.</span></p>
<p><span data-preserver-spaces="true">To initiate the setup process, copy the event listener and proceed to create a custom HTML tag in GTM, where you’ll then paste the code.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Add a pageview or DOM-ready trigger (recommended) to your custom HTML tag.</span></p>
<p><span data-preserver-spaces="true">💡 Pro Tip: Opt for firing on DOM ready if you integrated the Message Bird chat widget through GTM.</span></p>
<p><span data-preserver-spaces="true">The subsequent step involves adding a custom event trigger with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[messageBirdEvent]</span></strong><span data-preserver-spaces="true">&nbsp;that triggers every instance of opening and closing interactions with the Message Bird chat widget.</span></p>
<p><span data-preserver-spaces="true">For additional event properties/parameters, create a dataLayer variable labelled with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">. This variable proves instrumental in determining the action performed on the Message Bird chat widget, with possible values being:</span></p>
<ul>
<li><span data-preserver-spaces="true">Opened the widget</span></li>
<li><span data-preserver-spaces="true">Closed the widget</span></li>
</ul>
<p><span data-preserver-spaces="true">Subsequently, integrate your tags (Google Analytics (GA4), Piwik Pro, Mixpanel, etc.), incorporating any necessary customisations, and conduct thorough testing before publishing your setup.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		code: `<script>
window.MessageBirdChatWidget.on('toggle', function (isOpen) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'messageBirdEvent',
'chatAction': isOpen === true ? "opened the widget" : "closed the widget"
});

// isOpen === true -> customer opened the widget
// isOpen === false -> customer closed the widget
console.log(isOpen === true ? "DD - opened the widget" : "DD - closed the widget");
});
</script>`,
		slug: 'messagebird',
		logoPath: '/logos/messagebird.jpg'
	}, {
		title: 'Kustomer',
		listDescription: `Measure user engagements with the Kustomer chat widget on your website by using this event listener.`,
		code: `<script>
// Ensure the dataLayer array is initialized
window.dataLayer = window.dataLayer || [];

// Function to push dataLayer events
function pushDataLayerEvent(action) {
window.dataLayer.push({
'event': 'Kustomer_Chat_Event',
'chat_Action': action
});
}

// Add listeners for Kustomer chat events
Kustomer.addListener('onOpen', function(callbackResponse) {
pushDataLayerEvent('kustomer chat widget open');
});

Kustomer.addListener('onClose', function(callbackResponse) {
pushDataLayerEvent('kustomer chat widget close');
});

Kustomer.addListener('onConversationCreate', function(callbackResponse) {
pushDataLayerEvent('kustomer chat conversation create');
});

Kustomer.addListener('onUnread', function(callbackResponse) {
pushDataLayerEvent('kustomer chat unread count change');
});
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  User Interaction With Kustomer Chat with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">You can track your website visitors’ interactions with the Kustomer chat widget using Google Tag Manager (GTM) and the Kustomer chat event listener. To do this, </span><span data-preserver-spaces="true">start by creating</span><span data-preserver-spaces="true"> a new custom HTML tag in GTM and paste the <a href="https://www.kustomer.com/" target="_blank" rel="noopener">Kustomer chat</a> event listener code into this tag.</span></p>
<p><span data-preserver-spaces="true">Next, you’ll need to attach a trigger to your tag. Make sure the trigger fires after the chat widget has loaded on the site; this can </span><span data-preserver-spaces="true">be set</span><span data-preserver-spaces="true"> to trigger on DOM Ready or Window Loaded.</span></p>
<p><span data-preserver-spaces="true">Once the Kustomer event listener </span><span data-preserver-spaces="true">is added</span><span data-preserver-spaces="true">, it will begin registering dataLayer events for various user interactions with the chat widget.</span></p>
<p><span data-preserver-spaces="true">The following step involves setting up a custom event trigger in GTM, where you’ll add “</span><strong><span data-preserver-spaces="true">Kustomer_Chat_Event</span></strong><span data-preserver-spaces="true">” as the event name in the trigger. This event name </span><span data-preserver-spaces="true">is emitted</span><span data-preserver-spaces="true"> for all chat interactions tracked by the event listener.</span></p>
<p><span data-preserver-spaces="true">You’ll also need to create a variable in GTM using the “Data Layer Variable” type and set “</span><strong><span data-preserver-spaces="true">chat_Action</span></strong><span data-preserver-spaces="true">” as the key. </span><span data-preserver-spaces="true">This</span><span data-preserver-spaces="true"> will allow you to dynamically capture different chat actions performed by visitors, such as:</span></p>
<ul>
<li><span data-preserver-spaces="true">Kustomer</span><span data-preserver-spaces="true"> chat widget open</span></li>
<li><span data-preserver-spaces="true">Kustomer</span><span data-preserver-spaces="true"> chat widget close</span></li>
<li><span data-preserver-spaces="true">Kustomer</span><span data-preserver-spaces="true"> chat </span><span data-preserver-spaces="true">conversation</span><span data-preserver-spaces="true"> create</span></li>
<li><span data-preserver-spaces="true">Kustomer</span><span data-preserver-spaces="true"> chat unread count change</span></li>
</ul>
<p><span data-preserver-spaces="true">After creating the variable, you can </span><span data-preserver-spaces="true">start sending</span><span data-preserver-spaces="true"> this data to your analytics platform, such as Google Analytics (GA4), Piwik Pro, etc.</span></p>
<p><span data-preserver-spaces="true">The Kustomer chat event listener can also be used with other tag management solutions by following the same principles outlined above, enabling you to track Kustomer Chat interactions in platforms like Google Analytics (GA4), Piwik Pro, etc.</span></p>
<p><span data-preserver-spaces="true">To expedite the setup process, you can download a GTM recipe, which you’ll find by scrolling down this resource page.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'kustomer',
		logoPath: '/logos/kustomer.jpg'
	}, {
		title: 'ChatStack',
		listDescription: `Measure how users interact with the ChatStack live chat widget embedded on your website.`,
		code: `<script>
// Chat Status Changed Event Received
Chatstack.events.on('StatusModeChanged', function (e, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatStackEvent',
'chatStack_Action': "chat_session_status_" + data.status, // Corrected
'chatStack_Status': data.status, // Corrected
'chatStack_Widget_State': Chatstack.windowState,
'chatStack_chat_state': Chatstack.chatState,
'event_data': data
});
});

// Chat State Changed Event Received
Chatstack.events.on('ChatStateChanged', function (e, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatStackEvent',
'chatStack_Action': "chat_state_" + data.state, // Corrected
'chatStack_Status': Chatstack.statusMode, // Optional: no direct status in data
'chatStack_Widget_State': Chatstack.windowState,
'chatStack_chat_state': data.state, // Corrected
'event_data': data
});
});

// Initiate Chat State Changed Event Received
Chatstack.events.on('InitiateChatStateChanged', function (e, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'chatStackEvent',
'chatStack_Action': "initiate_chat_state_" + data.state, // Corrected
'chatStack_Status': Chatstack.statusMode, // Optional: no direct status in data
'chatStack_Widget_State': Chatstack.windowState,
'chatStack_chat_state': data.state, // Corrected
'event_data': data
});
});
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Visitor Interactions with ChatStack Chat Widget with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Here’s how to use Google Tag Manager and the <a href="https://www.chatstack.com/" target="_blank" rel="noopener">ChatStack</a> chat event listener to track interactions with the ChatStack widget in analytics platforms like Google Analytics (GA4), Piwik Pro, and others.</span></p>
<p><strong><span data-preserver-spaces="true">Step 1: Create a Custom HTML Tag &amp; Trigger</span></strong></p>
<p><span data-preserver-spaces="true">Start by creating a new custom HTML tag in Google Tag Manager. Copy and paste the ChatStack event listener script into this tag. Then, attach a trigger that fires the tag on DOM Ready, ensuring the ChatStack chat widget </span><span data-preserver-spaces="true">is fully loaded</span><span data-preserver-spaces="true"> on the website.</span></p>
<p><strong><span data-preserver-spaces="true">About the ChatStack Chat Event Listener:</span></strong></p>
<p><span data-preserver-spaces="true">The ChatStack event listener will register a dataLayer event named “</span><strong><span data-preserver-spaces="true">[chatStackEvent]</span></strong><span data-preserver-spaces="true">” for the following types of interactions with the ChatStack widget:</span></p>
<ul>
<li><span data-preserver-spaces="true">Chat widget status change</span></li>
<li><span data-preserver-spaces="true">Chat widget state change (maximize and minimize)</span></li>
<li><span data-preserver-spaces="true">Chat initiation</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">Step 2: Create a ChatStack Custom Event Trigger</span></strong></p>
<p><span data-preserver-spaces="true">Next, create a custom event trigger in Google Tag Manager, using “</span><strong><span data-preserver-spaces="true">[chatStackEvent]</span></strong><span data-preserver-spaces="true">” as the event name. Name the trigger and save it for later use in your tags.</span></p>
<p><strong><span data-preserver-spaces="true">Step 3: Define ChatStack DataLayer Variables</span></strong></p>
<p><span data-preserver-spaces="true">To provide more context about the type of ChatStack interaction, create a set of dataLayer variables in Google Tag Manager. Use the following keys in your variable configuration:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[chatStack_Action]</span></strong><span data-preserver-spaces="true">: Describes the specific ChatStack interaction.</span></li>
<li><strong><span data-preserver-spaces="true">[chatStack_Status]</span></strong><span data-preserver-spaces="true">: Returns the status of the ChatStack widget at the time of the interaction.</span></li>
<li><strong><span data-preserver-spaces="true">[chatStack_Widget_State]</span></strong><span data-preserver-spaces="true">: Provides context about the widget’s state (e.g., maximized, minimized).</span></li>
<li><strong><span data-preserver-spaces="true">[chatStack_chat_state]</span></strong><span data-preserver-spaces="true">: Captures the state of the chat session.</span></li>
<li><strong><span data-preserver-spaces="true">[event_data]</span></strong><span data-preserver-spaces="true">: An object containing details of the ChatStack event interaction.</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">Step 5: Capture Event Data In GA4, Piwik Pro, etc.</span></strong></p>
<p><span data-preserver-spaces="true">Once the variables </span><span data-preserver-spaces="true">are created</span><span data-preserver-spaces="true">, use them in your tags, such as a Google Analytics (GA4) event tag, to capture these interactions in your analytics platform.</span></p>
<p><span data-preserver-spaces="true">You can also track these ChatStack chat widget interactions in Piwik Pro Analytics using either Google Tag Manager or Piwik Pro Tag Manager.</span></p>
<p><strong><span data-preserver-spaces="true">Note:</span></strong><span data-preserver-spaces="true"> The event listener is Tag Manager agnostic, </span><span data-preserver-spaces="true">meaning </span><span data-preserver-spaces="true">it</span><span data-preserver-spaces="true"> can be used</span><span data-preserver-spaces="true"> with other Tag Management Solutions. However, the implementation principles remain the same.</span></p>
<p><span data-preserver-spaces="true">To expedite your setup, scroll down this resource page to find a GTM recipe template </span><span data-preserver-spaces="true">that you</span><span data-preserver-spaces="true"> can download and use.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'chatstack',
		logoPath: '/logos/chatstack.jpg'
	}, {
		title: 'Team Support Chat',
		listDescription: `Track user engagement with the Zendesk widget on your website by utilizing GTM and the event listener.`,
		code: `<script>
(function () {
// Utility function to push dataLayer event
function pushToDataLayer(action, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "teamSupport_interactions",
tsAction: action,
tsData: data
});
}

// Close Event
SnapEngage.setCallback('Close', function (type, status) {
pushToDataLayer('Close', { type: type, status: status });
});

// ChatMessageReceived Event
SnapEngage.setCallback('ChatMessageReceived', function (agent, msg) {
pushToDataLayer('ChatMessageReceived', { agent: agent, message: msg });
});

// ChatMessageSent Event
SnapEngage.setCallback('ChatMessageSent', function (msg) {
pushToDataLayer('ChatMessageSent', { message: msg });
});

// MessageSubmit Event
SnapEngage.setCallback('MessageSubmit', function (email, msg) {
pushToDataLayer('MessageSubmit', { email: email, message: msg });
});

// Minimize Event
SnapEngage.setCallback('Minimize', function (isMinimized, chatType, boxType) {
pushToDataLayer('Minimize', {
isMinimized: isMinimized,
chatType: chatType,
boxType: boxType
});
});

// Open Event
SnapEngage.setCallback('Open', function (status) {
pushToDataLayer('Open', { status: status });
});

// OpenProactive Event
SnapEngage.setCallback('OpenProactive', function (agent, msg) {
pushToDataLayer('OpenProactive', { agent: agent, message: msg });
});

// StartChat Event
SnapEngage.setCallback('StartChat', function (email, msg, type) {
pushToDataLayer('StartChat', {
email: email,
message: msg,
type: type
});
});

// StartCallme Event
SnapEngage.setCallback('StartCallMe', function (phone) {
pushToDataLayer('StartCallMe', { phone: phone });
});

// SwitchWidget Event
SnapEngage.setCallback('SwitchWidget', function (widget) {
pushToDataLayer('SwitchWidget', { widget: widget });
});

// Button Event
SnapEngage.setCallback('Button', function (buttonId) {
pushToDataLayer('Button', { buttonId: buttonId });
});

// ChatEnded Event
SnapEngage.setCallback('ChatEnded', function (reason) {
pushToDataLayer('ChatEnded', { reason: reason });
});

// Rating Prompt Clicked Event
SnapEngage.setCallback('RatingPromptClicked', function (rating) {
pushToDataLayer('RatingPromptClicked', { rating: rating });
});
})();
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Website Visitor's Engagement With The TeamSupport Chat Widget with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This instructional guide will show you how to use the <a href="https://www.teamsupport.com/" target="_blank" rel="noopener">TeamSupport</a> chat event listener and Google Tag Manager (GTM) to track website visitors’ interactions with the TeamSupport chat widget in analytics platforms such as Google Analytics (GA4), Piwik Pro, and others. </span><span data-preserver-spaces="true">By implementing the steps below,</span><span data-preserver-spaces="true"> you’ll gain deeper insights into user engagement with the chat widget.</span></p>
<h4><span data-preserver-spaces="true">Step 1: Add the TeamSupport Chat Event Listener Script in GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Start by creating a new </span><strong><span data-preserver-spaces="true">Custom HTML tag</span></strong><span data-preserver-spaces="true"> in Google Tag Manager. Copy and paste the TeamSupport chat event listener script (provided above) into this tag. Name the tag appropriately, such as “TeamSupport Chat Listener,” and configure it to fire using the </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> trigger type.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Firing on DOM Ready ensures the event listener </span><span data-preserver-spaces="true">is initialized</span> <span data-preserver-spaces="true">only</span><span data-preserver-spaces="true"> after the necessary elements of your webpage are loaded, </span><span data-preserver-spaces="true">particularly</span><span data-preserver-spaces="true"> if the TeamSupport chat widget </span><span data-preserver-spaces="true">is implemented</span><span data-preserver-spaces="true"> via GTM.</span></p>
<p><span data-preserver-spaces="true">This event listener script monitors </span><span data-preserver-spaces="true">various</span><span data-preserver-spaces="true"> user interactions with the TeamSupport chat widget and sends events to the dataLayer with the event name teamSupport_interactions. </span><span data-preserver-spaces="true">These events include interactions like chat </span><span data-preserver-spaces="true">message</span><span data-preserver-spaces="true"> sent, </span><span data-preserver-spaces="true">message</span><span data-preserver-spaces="true"> received, </span><span data-preserver-spaces="true">chat</span><span data-preserver-spaces="true"> opened, and more.</span></p>
<h4><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To process the events captured by the listener, create a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM:</span></p>
<ol>
<li><span data-preserver-spaces="true">Navigate to the </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> section.</span></li>
<li><span data-preserver-spaces="true">Click </span><strong><span data-preserver-spaces="true">New</span></strong><span data-preserver-spaces="true">, then select </span><strong><span data-preserver-spaces="true">Custom Event</span></strong><span data-preserver-spaces="true"> as the trigger type.</span></li>
<li><span data-preserver-spaces="true">Enter teamSupport_interactions as the event name.</span></li>
<li><span data-preserver-spaces="true">Save the trigger with a descriptive name like “TeamSupport Chat Interaction Trigger.”</span></li>
</ol>
<h4><span data-preserver-spaces="true">Step 3: Define DataLayer Variables in GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, create the following </span><strong><span data-preserver-spaces="true">Data Layer Variables</span></strong><span data-preserver-spaces="true"> to extract specific details from the dataLayer events:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">tsAction</span></strong><span data-preserver-spaces="true">: Represents the type of interaction or event (e.g., ChatMessageSent, ChatMessageReceived).</span></li>
<li><strong><span data-preserver-spaces="true">tsData</span></strong><span data-preserver-spaces="true">: Contains additional data about the interaction in an object format. You can extract specific attributes from this object based on your reporting needs, such as:</span>
<ul>
<li><span data-preserver-spaces="true">Agent </span><span data-preserver-spaces="true">name</span></li>
<li><span data-preserver-spaces="true">Message content</span></li>
<li><span data-preserver-spaces="true">Visitor email</span></li>
<li><span data-preserver-spaces="true">Interaction status</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Use GTM’s Data Layer Variable feature to pull specific keys from the </span><span data-preserver-spaces="true">tsData</span><span data-preserver-spaces="true"> object for advanced tracking and segmentation.</span></p>
<h4><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Attach Triggers</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Once your triggers and variables </span><span data-preserver-spaces="true">are configured</span><span data-preserver-spaces="true">, </span><span data-preserver-spaces="true">you’re ready to</span><span data-preserver-spaces="true"> create your marketing tags (e.g., Google Analytics [GA4] event tags, Piwik Pro tags) to track these interactions.</span></p>
<ol>
<li><span data-preserver-spaces="true">Create a new tag in GTM for your analytics platform.</span></li>
<li><span data-preserver-spaces="true">Use the trigger created in Step 2 to fire the tag when a teamSupport_interactions event occurs.</span></li>
<li><span data-preserver-spaces="true">Leverage the variables defined in Step 3 to populate event parameters, such as:</span>
<ul>
<li><span data-preserver-spaces="true">Action (</span><span data-preserver-spaces="true">tsAction</span><span data-preserver-spaces="true">)</span></li>
<li><span data-preserver-spaces="true">Additional interaction details (</span><span data-preserver-spaces="true">tsData</span><span data-preserver-spaces="true">)</span></li>
</ul>
</li>
</ol>
<p><span data-preserver-spaces="true">This</span><span data-preserver-spaces="true"> allows you to add meaningful context to the TeamSupport chat widget events captured in your analytics reports.</span></p>
<p><strong>Additional Notes:</strong></p>
<p><span data-preserver-spaces="true">The TeamSupport chat event listener script can be implemented using GTM and other Tag Management Solutions (TMS). The core implementation principles remain consistent, ensuring flexibility across platforms.</span></p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Quick Start</span></strong><span data-preserver-spaces="true">: Scroll down this resource page to download a GTM recipe template that you can customize and use to track TeamSupport chat widget interactions seamlessly.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'team-support-chat',
		logoPath: '/logos/team-support.jpg'
	}, {
		title: 'Medallia',
		listDescription: `Track interactions with Medallia widgets, forms, and other elements, capturing these interactions as events and conversions.`,
		code: `<script>
(function(window) {
// Define a function to handle Medallia events
function handleMedalliaEvent(eventName, actionDescription, additionalKeys) {
window.addEventListener(eventName, function(mdEvent) {
var mdDetail = mdEvent.detail || {};
var eventData = {
event: "medallia_gtm_events",
medallia_action: actionDescription,
medallia_form_id: mdDetail.Form_ID || null,
medallia_form_type: mdDetail.Form_Type || null,
medallia_feedback_uuid: mdDetail.Feedback_UUID || null,
medallia_content: mdDetail.Content || null
};

// Add any additional keys from the event detail
if (additionalKeys && additionalKeys.length > 0) {
for (var i = 0; i < additionalKeys.length; i++) {
var key = additionalKeys[i];
eventData[key] = mdDetail[key] || null;
}
}

// Push the event data to the dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(eventData);
});
}

// Set up listeners for the specified Medallia events
handleMedalliaEvent('MDigital_Invite_Displayed', 'Invite displayed');
handleMedalliaEvent('MDigital_Invite_Accepted', 'Invite accepted');
handleMedalliaEvent('MDigital_Invite_Declined', 'Invite declined');
handleMedalliaEvent('MDigital_Invite_Skipped', 'Invite skipped');
handleMedalliaEvent('MDigital_ShowForm_Called', 'Form call triggered');
handleMedalliaEvent('MDigital_Button_Displayed', 'Feedback button displayed');
handleMedalliaEvent('MDigital_Form_Displayed', 'Form displayed');
handleMedalliaEvent('MDigital_Form_Page_Displayed', 'Form page displayed');
handleMedalliaEvent('MDigital_Form_Next_Page', 'Form next page');
handleMedalliaEvent('MDigital_Form_Back_Page', 'Form back page');
handleMedalliaEvent('MDigital_Form_Close_Submitted', 'Form closed after submission', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_Form_Close_No_Submit', 'Form closed without submission');
handleMedalliaEvent('MDigital_Submit_Feedback', 'Feedback submitted', ['Feedback_UUID', 'Content']);
handleMedalliaEvent('MDigital_Feedback_Button_Clicked', 'Feedback button clicked', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_ThankYou_Displayed', 'Thank you displayed', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_ThankYou_Close', 'Thank you closed', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_CaptureButton_Clicked', 'Screen capture started', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_CaptureButton_Taken', 'Screen capture taken', ['Feedback_UUID']);
handleMedalliaEvent('MDigital_CaptureButton_Cancel', 'Screen capture canceled', ['Feedback_UUID']);
})(window);
<script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Medallia Feedback and Form Widget Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span style="font-size: 16px">This section of this resource page will walk you through the process of using the Medallia event listener script with Google Tag Manager (GTM) to track visitor interactions with the Medallia feedback and form widgets on your website. With this setup, you can send this data to your analytics tools like Google Analytics (GA4), Piwik Pro, Mixpanel, and more to gain valuable insights into user behavior.</span></p>
<h3>Step 1: Adding the Medallia Event Listener Script to GTM</h3>
<p>&nbsp;</p>
<p>Start by copying the provided Medallia event listener script and creating a new tag in Google Tag Manager of the <strong>Custom HTML</strong> tag type. Paste the script into the tag, assign it a name (e.g., “Medallia Event Listener”), and configure it to trigger on <strong>DOM Ready</strong>.</p>
<p>💡 <strong>Pro Tip:</strong> Firing the tag on DOM Ready ensures that the Medallia widgets are fully loaded before the event listener script is activated.</p>
<p>The event listener script tracks various interactions with the Medallia feedback and form widgets, such as invites displayed, feedback submitted, and forms closed. For every tracked interaction, the script pushes a <code>dataLayer</code> event named <strong><code>medallia_gtm_events</code></strong> along with additional details like the action type, form ID, and feedback UUID.</p>
<p>The key variable <code>medallia_action</code> captures the type of interaction. Here’s a list of tracked actions:</p>
<ul>
<li>Invite displayed</li>
<li>Invite accepted</li>
<li>Invite declined</li>
<li>Invite skipped</li>
<li>Form call triggered</li>
<li>Feedback button displayed</li>
<li>Form displayed</li>
<li>Form page displayed</li>
<li>Form next page</li>
<li>Form back page</li>
<li>Form closed after submission</li>
<li>Form closed without submission</li>
<li>Feedback submitted</li>
<li>Feedback button clicked</li>
<li>Thank you displayed</li>
<li>Thank you closed</li>
<li>Screen capture started</li>
<li>Screen capture taken</li>
<li>Screen capture canceled</li>
</ul>
<h3>Step 2: Creating a Custom Event Trigger in GTM</h3>
<p>&nbsp;</p>
<p>Next, set up a custom event trigger in Google Tag Manager.</p>
<ol>
<li>Navigate to <strong>Triggers</strong> in GTM and create a new trigger.</li>
<li>Select the trigger type <strong>Custom Event</strong>.</li>
<li>Enter <code>medallia_gtm_events</code> as the event name.</li>
<li>Save the trigger and assign it an appropriate name (e.g., “CE – Medallia Event Trigger”).</li>
</ol>
<p>This trigger ensures that your tags fire whenever a Medallia interaction event is recorded.</p>
<h3>Step 3: Creating DataLayer Variables</h3>
<p>&nbsp;</p>
<p>To capture detailed information about the Medallia interactions, you’ll need to create the following DataLayer variables in GTM:</p>
<ul>
<li><strong><code>medallia_action</code></strong>: Returns the type of Medallia interaction/event (e.g., invite accepted, feedback submitted).</li>
<li><strong><code>medallia_form_id</code></strong>: Provides the ID of the feedback or form.</li>
<li><strong><code>medallia_form_type</code></strong>: Indicates the type of form used.</li>
<li><strong><code>medallia_feedback_uuid</code></strong>: Contains the unique identifier for the feedback.</li>
<li><strong><code>medallia_content</code></strong>: Includes the content of the feedback, if applicable.</li>
</ul>
<p>To create these variables:</p>
<ol>
<li>Go to <strong>Variables</strong> in GTM and create a new variable of type <strong>Data Layer Variable</strong>.</li>
<li>Assign the appropriate key to each variable (e.g., <code>medallia_action</code> for the action type).</li>
<li>Save the variables with descriptive names (e.g., “DLV – Medallia Action”).</li>
</ol>
<h3>Step 4: Creating Marketing Tags and Utilizing Variables</h3>
<p>&nbsp;</p>
<p>After setting up your trigger and variables, the next step is to create your marketing tags, such as GA4 or Piwik Pro event tags.</p>
<ol>
<li>Create a new tag in GTM (e.g., GA4 Event Tag).</li>
<li>Use the custom event trigger (<code>medallia_gtm_events</code>) created earlier to fire the tag.</li>
<li>Leverage the DataLayer variables (e.g., <code>medallia_action</code>, <code>medallia_form_id</code>) in your tag configuration to add context to the event data.</li>
</ol>
<p>This ensures that the data sent to your analytics platforms includes detailed insights about Medallia widget interactions, allowing for more effective analysis.</p>
<p><strong>Additional Implementation Notes:</strong></p>
<p>The Medallia event listener script is tag manager agnostic, meaning it can be used with other Tag Management Solutions (TMS) beyond GTM. The core principles of implementation remain the same, requiring the addition of the script, creation of triggers, and configuration of variables.</p>
<p>💡 <strong>Save Time In Your Setup:</strong> Scroll down this page to find a downloadable GTM recipe template. Customize it to quickly track Medallia feedback and form widget interactions on your site.</p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'medallia',
		logoPath: '/logos/medallia.jpg'
	}, {
		title: 'Zendesk',
		listDescription: `Track user engagement with the Zendesk widget on your website by utilizing GTM and the event listener.`,
		code: ``,
		description: ``,
		slug: 'zendesk',
		logoPath: '/logos/zendesk.jpg'
	}, {
		title: 'HappyFox chat',
		listDescription: `Here is an event listener you can use to track user engagement easily with the HappyFox chat widget.`,
		code: ``,
		description: ``,
		slug: 'happyfox-chat',
		logoPath: '/logos/happyfox.jpg'
	}
];


export const listenerCardsForm: ListenerCardProps[] = [
	{
		title: 'Hubspot form',
		listDescription: `Trigger your conversion pixels on successful submission of HubSpot forms on your website, using this event listener.`,
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
		description: `<script type="text/javascript">
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
		slug: 'hubspot-form',
		logoPath: '/logos/hubspot.jpg'
	}, {
		title: 'ConvertKit Form',
		listDescription: `Measure your Convertkit form submission as conversions and fire your marketing tags/pixels on conversion.`,
		code: `<script type="text/javascript">
(function() {
document.addEventListener("submit", function(a) {
a.target.getAttribute("data-sv-form") && window.dataLayer.push({
event: "converkitform.submit",
convertKitFormId: a.target.getAttribute("data-sv-form"),
convertkitUserId: a.target.getAttribute("data-uid")
})
}, !0)
})();
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Convertkit Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Enhance your marketing data with ConvertKit conversion data. If you use the ConvertKit form for lead capturing, you can track successful form submissions as conversions using GTM and this ConvertKit event listener code.</span></p>
<p><span data-preserver-spaces="true">Start by creating a custom HTML tag type, where you’ll be pasting the listener code there.</span></p>
<p><span data-preserver-spaces="true">This code pushes a dataLayer event when a user successfully submits a Convertkit form with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[converkitform.submit]</span></strong></p>
<p><span data-preserver-spaces="true">The next step is to create a custom event trigger using that event name, this trigger will be used to fire your marketing tags/pixels.</span></p>
<p><span data-preserver-spaces="true">To capture the form details like form ID and user ID in the form database, you can use the following dataLayer variables;</span></p>
<p><strong><span data-preserver-spaces="true">[convertKitFormId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the ConvertKit form ID</span></p>
<p><strong><span data-preserver-spaces="true">[convertkitUserId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the userID in the form database</span></p>
<p><span data-preserver-spaces="true">with this you can enrich your marketing data in your analytics and advertising platform.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'convertkit-form',
		logoPath: '/logos/convertkit.jpg'
	}, {
		title: 'Klaviyo Form',
		listDescription: `Don't miss any Klaviyo form conversions again by tracking when a user successfully submits your Klaviyo form.`,
		code: `<script>
window.dataLayer = window.dataLayer || [];
window.addEventListener("klaviyoForms", function(e) { 
if (e.detail.type == 'submit') {
dataLayer.push({
'event' : 'klaviyoFormSubmission',
'formId' : e.detail.formId,
'formTitle' : e.detail.metaData.$source,
'formEmail': e.detail.metaData.$email
});
}
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Klaviyo Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you are using the Klaviyo form for capturing leads on your website, with the help of Google Tag Manager and this Klaviyo form event listener, you’ll be able to track successful form submissions as conversion</span></p>
<p><span data-preserver-spaces="true">Implementing this is easy, start by creating a custom HTML tag type, where you’ll be pasting the event listener javascript code, save the tag and add a pageview or DOM-ready trigger</span></p>
<p><span data-preserver-spaces="true">Next is to create a custom event trigger with the event name as <strong>[klaviyoFormSubmission]</strong></span></p>
<p><span data-preserver-spaces="true">To capture the form ID, form title and submitted visitor email, created the following dataLayer variables with the following keys;</span></p>
<p><strong><span data-preserver-spaces="true">[formId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; for the form ID</span></p>
<p><strong><span data-preserver-spaces="true">[formTitle]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; for the form title</span></p>
<p><strong><span data-preserver-spaces="true">[formEmail]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; for the user submitted email</span></p>
<p><strong>🏆 Credit:</strong></p>
<p><strong>The creator of this code is <a href="https://www.analyticsmania.com/post/track-klaviyo-forms-with-google-tag-manager/" target="_blank" rel="noopener">Julius Fedorovicius</a> </strong>&nbsp;(only the key that captures the submitted email was added to this script)</p>
								</div>
				</div>
					</div>`,
		slug: 'klaviyo-form',
		logoPath: '/logos/klaviyo.jpg'
	}, {
		title: 'Webflow Form',
		listDescription: `Fire your marketing tags/pixels when a user converts on your website by submitting a Webflow form.`,
		code: `<script type="text/javascript">
$("form").submit(function(event) {
var formID = $(this).attr('id');
dataLayer.push({
'event': 'formsubmit_event',
'formID': formID
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Webflow Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">To track Webflow form conversions in your analytics and advertising platform, you’ll need Google Tag Manager, and the Webflow form submits event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">Start by creating a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[formsubmit_event]</span></strong><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">the event happens only on successful submission of Webflow forms</span></p>
<p><span data-preserver-spaces="true">Connect your marketing tags/pixel to this trigger, debug, test and publish once everything is okay.</span></p>
<p><span data-preserver-spaces="true">To capture the form ID, create a dataLayer with the key&nbsp;</span><strong><span data-preserver-spaces="true">[formID]</span></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'webflow-form',
		logoPath: '/logos/webflow.jpg'
	}, {
		title: 'Formidable Form',
		listDescription: `Detect the successful submission of your Formidable forms, and use it as a trigger for your marketing pixels.`,
		code: `<script>
jQuery(document).ready(function($){
$(document).on( 'frmFormComplete', function( event, form, response ) {
var formID = $(form).find('input[name="form_id"]').val();
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'formidable_form_submitted',
'formID': formID
});
});});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Formidable Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Use Google Tag Manager with this event listener to track Formidable form submissions as conversions in your analytics and advertising platform.</span></p>
<p><span data-preserver-spaces="true">Begin by creating a custom HTML tag in Google Tag Manager, copying the Formidable form event listener code, pasting it in the tag, and attaching a pageview or DOM-ready trigger.</span></p>
<p><span data-preserver-spaces="true">The following step is to create a custom event trigger that only happens on successful form submissions with an event name of&nbsp;</span><strong><span data-preserver-spaces="true">[formidable_form_submitted]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">Create a dataLayer variable with the designated key&nbsp;</span><strong><span data-preserver-spaces="true">[formID]</span></strong><span data-preserver-spaces="true">&nbsp;to collect the form ID.</span></p>
<p><span data-preserver-spaces="true">Afterwards, you can effortlessly activate your marketing conversion tags/pixels through the custom event you’ve created for successful Formidable form submissions&nbsp;</span><strong><span data-preserver-spaces="true">[formidable_form_submitted]</span></strong><span data-preserver-spaces="true">.&nbsp;</span></p>
<p><span data-preserver-spaces="true">With the assistance of the form ID variable, you can integrate the form ID into your analytics stack or refine your trigger conditions to optimize your marketing efforts.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'formidable-form',
		logoPath: '/logos/formidable.jpg'
	}, {
		title: 'Unbounce Form',
		listDescription: `Capture the successful submission of your Unbounce forms, and trigger your marketing pixels on this action.`,
		code: `<script>
window.ub.hooks.beforeFormSubmit.push(function(args) {
var email = args.formElement.querySelector('input#email');
var name = args.formElement.querySelector('input#name');
var firstName = args.formElement.querySelector('input#first_name');
var lastName = args.formElement.querySelector('input#last_name');
var phoneNumber = args.formElement.querySelector('input#phone_number');
var formId = args.formElement.id;

dataLayer.push({
'event': 'unbounce-form-submission',
'form-id': formId,
'form-email': email.value,
'form-name-field': name ? name.value : '',
'form-firstname-field': firstName ? firstName.value : '',
'form-lastname-field': lastName ? lastName.value : '',
'form-phonenumber-field': phoneNumber ? phoneNumber.value : ''
});
});

// This is used as a trigger for another tag to do your work BEFORE the datalayer gets cleared 
window.ub.hooks.afterFormSubmit.push(function() {
window.dataLayer.push({
'event': 'ub-form-success'
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Unbounce Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using this Unbounce form event listener, Google Tag Manager, Piwik Pro, or your preferred tag management system (TMS), you can effortlessly track Unbounce form submissions as conversions. Simply copy the provided event listener code and paste it into a custom HTML tag in Google Tag Manager, ensuring it is triggered on pageview or DOM Ready.</span></p>
<p><span data-preserver-spaces="true">A helpful tip: I recommend using the DOM Ready trigger.</span></p>
<p><span data-preserver-spaces="true">Next, navigate to the triggers section to create a custom event trigger type&nbsp;</span><strong><span data-preserver-spaces="true">[ub-form-success]</span></strong><span data-preserver-spaces="true">. This trigger will enable you to fire your marketing tags or pixels, such as Google Analytics, Facebook Pixels, Google Ads, Mixpanel, Piwik Pro, and more.</span></p>
<p><span data-preserver-spaces="true">It is crucial to ensure that your implementation is compliant with privacy regulations. In order to trigger your Unbounce form submission as a conversion for specific forms, you can utilize trigger conditions in Google Tag Manager. This allows you to record conversions selectively based on certain pages, form IDs, or user types.</span></p>
<p><span data-preserver-spaces="true">Please note that an event is triggered before the Unbounce form is successfully submitted, and the event name associated with this is </span><strong><span data-preserver-spaces="true">[unbounce-form-submission]</span></strong><span data-preserver-spaces="true">. This event captures the form field data. If they are available, these are;</span></p>
<ul>
<li><span data-preserver-spaces="true">Email</span></li>
<li><span data-preserver-spaces="true">Name</span></li>
<li><span data-preserver-spaces="true">FirstName</span></li>
<li><span data-preserver-spaces="true">LastName</span></li>
<li><span data-preserver-spaces="true">PhoneNumber</span></li>
<li><span data-preserver-spaces="true">Form ID</span></li>
</ul>
<p><span data-preserver-spaces="true">The event can be utilized in conjunction with the successful form submission event&nbsp;</span><strong><span data-preserver-spaces="true">[ub-form-success]</span></strong><span data-preserver-spaces="true">&nbsp;to enhance your data.</span></p>
<p><span data-preserver-spaces="true">An additional tip: To access the data fields, create a dataLayer variable.</span></p>
<p><strong>Credit: </strong><span data-preserver-spaces="true">Code created by <a href="https://www.linkedin.com/in/richard-makara-6499a273" target="_blank" rel="noopener">Richard Makara</a> (<a href="https://reconfigured.io/" target="_blank" rel="noopener">RECONFIGURED</a> CEO) – (we only made slight modifications to it)</span></p>
								</div>
				</div>
					</div>`,
		slug: 'unbounce-form',
		logoPath: '/logos/unbounce.jpg'
	}, {
		title: 'Cognito Form',
		listDescription: `Utilise the event listener to track the successful submission of your Cognito form as a conversion.`,
		code: `<script>
// Raised after the user clicks the “Submit” button, but before the form is submitted to the Cognito Forms servers. 
Cognito.on('beforeSubmit', function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'cognito_form_submit_button',
'cogformID': event.data.entry.Form.Id,
'cogformName': event.data.entry.Form.Name,
'cogInternalFormName': event.data.entry.Form.InternalName,
'cogformEmail': event.data.entry.Email,
'cogFormNameObj': event.data.entry.Name,
'cogformHasError':event.data.hasErrors
});
console.log("DD - submitted cognito form");
});

// Raised after the form is submitted but before the confirmation page is displayed.
Cognito.on('beforeSubmit', function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'cognito_form_submit_successful',
'cogformID': event.data.entry.Form.Id,
'cogformName': event.data.entry.Form.Name,
'cogInternalFormName': event.data.entry.Form.InternalName,
'cogformEmail': event.data.entry.Email,
'cogFormNameObj': event.data.entry.Name,
'cogformHasError': event.data.hasErrors
});
console.log("DD - actually submitted cognito form");
});
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Cognito Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">In your analytics and advertising platform, you can measure successful <a href="https://www.cognitoforms.com/" target="_blank" rel="noopener">Cognito Form</a> submissions as conversions. Achieving this is possible by using Google Tag Manager in conjunction with the Cognito Form event listener. This allows you to specifically track successful form submissions as conversions within your analytics stack, including platforms like Google Analytics (GA4), Piwik Pro, and your chosen advertising platform.</span></p>
<p><span data-preserver-spaces="true">Before delving into the instructions on utilising the Cognito Form event listener in Google Tag Manager, it’s crucial to note that the JavaScript code functions seamlessly for embedded Cognito forms. An alternative approach is necessary if you’re using the iframe embed.</span></p>
<p><span data-preserver-spaces="true">The implementation process is straightforward and commences by creating a custom HTML tag in Google Tag Manager. Copy the Cognito Form event listener code, paste it into the tag, and attach a pageview or DOM-ready trigger.</span></p>
<p><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;Opt for executing the code on a DOM-Ready trigger type.</span></p>
<p><span data-preserver-spaces="true">The subsequent step involves creating a custom event trigger that exclusively occurs upon successful form submissions, bearing the event name&nbsp;</span><strong><span data-preserver-spaces="true">[cognito_form_submit_successful]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">The dataLayer event also emits an event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[cognito_form_submit_button]</span></strong><span data-preserver-spaces="true">, triggered after the user clicks the “Submit” button but before the form is submitted to the Cognito Forms servers. This provides an alternative means to track successful submissions and Cognito form submissions with errors.</span></p>
<p><span data-preserver-spaces="true">The next step is to create a dataLayer variable for the following information available on each dataLayer push:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[cogformID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Collects the Cognito form ID.</span></li>
<li><strong><span data-preserver-spaces="true">[cogformName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Captures the Cognito form name</span></li>
<li><strong><span data-preserver-spaces="true">[cogInternalFormName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Holds the value of the form name in Cognito (like a unique name, mostly without spaces).</span></li>
<li><strong><span data-preserver-spaces="true">[cogformEmail]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Stores the email supplied by the user when submitting the Cognito form.</span></li>
<li><strong><span data-preserver-spaces="true">[cogFormNameObj]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Facilitates access to the name, whether first, last, middle, etc., provided that the field exists and was supplied by the user at the time of submission.</span></li>
<li><strong><span data-preserver-spaces="true">[cogformHasError]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Used to identify if a form has errors.</span></li>
</ul>
<p><span data-preserver-spaces="true">Subsequently, you can seamlessly activate your marketing conversion tags/pixels through the custom event you’ve created for successful Cognito form submissions&nbsp;</span><strong><span data-preserver-spaces="true">[cognito_form_submit_successful]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">Additionally, implement your analytics event and conversion tags, such as Google Analytics (GA4) event tags, Piwik Pro, Mixpanel, Google Ads Pixels, LinkedIn Insight tags, Meta Pixel, etc.</span></p>
<p><span data-preserver-spaces="true">Ensure thorough testing of your setup before finalising and publishing.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'cognito-form',
		logoPath: '/logos/cognito.jpg'
	}, {
		title: 'Instapage Form',
		listDescription: `Utilise the event listener to track submissions of your InstaPage Form and implement conversion tracking.`,
		code: `<script>
window.instapageFormSubmitSuccess = function (form) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'formSubmissionSuccess'
});

console.log('form submitted')
};
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Instapage Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">To measure successful <a href="https://instapage.com/" target="_blank" rel="noopener">Instapage</a> form conversions effectively through Google Tag Manager, follow these steps: Begin by creating a custom HTML tag in GTM.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Copy the Instapage form event listener code and paste it into the custom HTML tag.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Subsequently, trigger this tag on pageview or DOM-Ready.</span></p>
<p><span data-preserver-spaces="true">Proceed to the triggers section and establish a custom event trigger type&nbsp;</span><strong><span data-preserver-spaces="true">[formSubmissionSuccess]</span></strong><span data-preserver-spaces="true">.&nbsp;</span></p>
<p><span data-preserver-spaces="true">This trigger is designed to detect the dataLayer event emitted by the Instapage form event listener upon successful form submission. Utilise this trigger to execute marketing tags or pixels, such as Google Analytics, Google Ads, Facebook Pixels, Mixpanel, Piwik Pro, etc.</span></p>
<p><span data-preserver-spaces="true">Additionally, ensure that your implementation adheres to privacy regulations. Leverage trigger conditions in Google Tag Manager to specify the pages on which the conversion should be recorded.</span></p>
<p><span data-preserver-spaces="true">It’s essential to note that, following a series of tests, it has been observed that the dataLayer may not function on all Instapage forms, particularly in cases with multiple forms on a page. In such scenarios, employing the Google Tag Manager form trigger type proves helpful.</span></p>
<p><span data-preserver-spaces="true">The code was found on <a href="https://help.instapage.com/hc/en-us/articles/205223588-Form-submit-callback" target="_blank" rel="noopener">The Instapage documentation</a>.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'instapage-form',
		logoPath: '/logos/instapage.jpg'
	}, {
		title: 'Omnisend',
		listDescription: `Capture the Omnisend form interactions and successful submissions and execute your marketing pixels.`,
		code: `<script>
// Function to push event details to the dataLayer
function pushToDataLayer(eventType, eventData) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'omnisend_form_event',
event_type: eventType,
form_name: eventData.form.name,
form_id: eventData.form.id,
form_display_type: eventData.form.displayType,
form_version_id: eventData.form.versionID,
form_version_name: eventData.form.versionName,
form_values: eventData.formValues,
brand_id: eventData.brandID,
step: eventData.step || null,
timestamp: eventData.timeStamp
});
}

// Event listener for Omnisend form events
window.addEventListener("omnisendForms", function(e) {
var eventType = e.detail.type;
var eventData = e.detail;

// Push the event details to the dataLayer
pushToDataLayer(eventType, eventData);
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Omnisend Form Interactions and Successful Form Submissions as Conversions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using the <strong><a href="https://www.omnisend.com/" target="_blank" rel="noopener">Omnisend form</a></strong> event listener and tag management solutions like Google Tag Manager (GTM), you can track Omnisend form interactions as events and conversions in Google Analytics (GA4), Piwik Pro, Meta, Google Ads, and other platforms.</span></p>
<p><span data-preserver-spaces="true">To track Omnisend form interactions, I’ll walk you through the steps using GTM as the preferred Tag Management System (TMS).</span></p>
<p><strong><span data-preserver-spaces="true">Step 1: Create a Custom HTML Tag &amp; Trigger</span></strong></p>
<p><span data-preserver-spaces="true">First, create a custom HTML tag in GTM and paste the Omnisend form event listener script into it. </span><span data-preserver-spaces="true">Attach a trigger</span><span data-preserver-spaces="true">, which can be</span><span data-preserver-spaces="true"> DOM Ready.</span></p>
<p><strong><span data-preserver-spaces="true">About The Omnisend Form Event Listener Script:</span></strong></p>
<p><span data-preserver-spaces="true">The Omnisend form event listener script emits dataLayer events for the following form interactions:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">view</span></strong><span data-preserver-spaces="true">: Fires when a popup, flyout form, or embedded form first appears on the page.</span></li>
<li><strong><span data-preserver-spaces="true">interaction</span></strong><span data-preserver-spaces="true">: Fires when the user interacts with the form (e.g., selects an input field); it fires only once for each form.</span></li>
<li><strong><span data-preserver-spaces="true">submit</span></strong><span data-preserver-spaces="true">:</span><span data-preserver-spaces="true"> Fires when a visitor completes the primary conversion action in a form (e.g., subscribing via email or SMS); it fires only once per Omnisend form.</span></li>
<li><strong><span data-preserver-spaces="true">close</span></strong><span data-preserver-spaces="true">: Fires when a visitor closes the form.</span></li>
<li><strong><span data-preserver-spaces="true">stepView</span></strong><span data-preserver-spaces="true">: Fires when each step of a multi-step form </span><span data-preserver-spaces="true">is displayed</span><span data-preserver-spaces="true"> on the page; it can fire multiple times per Omnisend form.</span></li>
<li><strong><span data-preserver-spaces="true">stepInteraction</span></strong><span data-preserver-spaces="true">: Fires when the user interacts with each step of a multi-step form; it fires once per step.</span></li>
<li><strong><span data-preserver-spaces="true">stepSubmit</span></strong><span data-preserver-spaces="true">: </span><span data-preserver-spaces="true">Fires</span><span data-preserver-spaces="true"> when each step of a multi-step form is submitted; it can fire multiple times per form.</span></li>
</ul>
<p><span data-preserver-spaces="true">Now you </span><span data-preserver-spaces="true">have an understanding of</span><span data-preserver-spaces="true"> these Omnisend form interactions that trigger dataLayer events. The next step is to create a trigger in GTM that </span><span data-preserver-spaces="true">will be used</span><span data-preserver-spaces="true"> to fire your analytics tags and marketing pixels.</span></p>
<p><strong><span data-preserver-spaces="true">Step 2: Create Omnisend Form Custom Event Trigger</span></strong></p>
<p><span data-preserver-spaces="true">Create a custom event trigger in GTM with “</span><strong><span data-preserver-spaces="true">[omnisend_form_event]</span></strong><span data-preserver-spaces="true">” as the event name. The event listener will register this for all Omnisend form interactions </span><span data-preserver-spaces="true">tracked by it</span><span data-preserver-spaces="true">.</span></p>
<p><strong><span data-preserver-spaces="true">Step 3: Add More Context By Defining DataLayer Variables</span></strong></p>
<p><span data-preserver-spaces="true">Next, create a set of dataLayer variables to capture additional details about the Omnisend events, form attributes, and form data (which can </span><span data-preserver-spaces="true">be used</span><span data-preserver-spaces="true"> for enhanced conversion tracking):</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[event_type]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the Omnisend form event type (view, interaction, submit, close, </span><span data-preserver-spaces="true">stepView</span><span data-preserver-spaces="true">, stepInteraction, stepSubmit)</span></li>
<li><strong><span data-preserver-spaces="true">[form_name]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the Omnisend form name</span></li>
<li><strong><span data-preserver-spaces="true">[form_id]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the form ID</span></li>
<li><strong><span data-preserver-spaces="true">[form_display_type]</span></strong><span data-preserver-spaces="true"> -&gt; Returns how the form was displayed (e.g., popup)</span></li>
<li><strong><span data-preserver-spaces="true">[form_version_id]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the Omnisend form version ID</span></li>
<li><strong><span data-preserver-spaces="true">[form_version_name]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the Omnisend form version name</span></li>
<li><strong><span data-preserver-spaces="true">[form_values]</span></strong><span data-preserver-spaces="true"> -&gt; Object to narrow down specific form field selections for enhanced conversion tracking</span></li>
<li><strong><span data-preserver-spaces="true">[brand_id]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the unique brand ID in Omnisend</span></li>
<li><strong><span data-preserver-spaces="true">[step]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the step in which the event occurred (for multi-step forms)</span></li>
<li><strong><span data-preserver-spaces="true">[timestamp]</span></strong><span data-preserver-spaces="true"> -&gt; Returns the timestamp of the action</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">Step 4: Data Collecting In Analytics &amp; Ads Platforms</span></strong></p>
<p><span data-preserver-spaces="true">The final step is </span><span data-preserver-spaces="true">to start</span><span data-preserver-spaces="true"> capturing these Omnisend form events in platforms like GA4, Piwik Pro, Meta, Google Ads, etc. To do this, create the necessary tags, configure them with the variables, and attach the Omnisend trigger.</span></p>
<p><span data-preserver-spaces="true">To expedite your implementation, scroll down this resource page to </span><span data-preserver-spaces="true">find</span><span data-preserver-spaces="true"> a GTM recipe template </span><span data-preserver-spaces="true">that you can download</span><span data-preserver-spaces="true">.</span><span data-preserver-spaces="true"> While what has </span><span data-preserver-spaces="true">been covered</span><span data-preserver-spaces="true"> so far is tailored for GTM, </span><span data-preserver-spaces="true">the Omnisend form event listener can be used</span><span data-preserver-spaces="true"> with other Tag Managers.</span></p>
<p><span data-preserver-spaces="true">By following the principles outlined above, </span><span data-preserver-spaces="true">you’ll be able to</span><span data-preserver-spaces="true"> effectively measure Omnisend form interactions and successful form submissions on platforms like Google Analytics, Google Ads, Meta, and Piwik Pro.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'omnisend',
		logoPath: '/logos/omnisend.jpg'
	}, {
		title: 'Ninja Forms',
		listDescription: `Enhance your marketing data by measuring Ninja Form submission as conversion using this event listener.`,
		code: `<script>
jQuery(document).ready( function() {
jQuery(document).on('nfFormSubmitResponse', function(event, response, id) { 
dataLayer.push ({
'event' : 'ninjaFormSubmission',
'NFformID' : response.id 
});
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Ninja Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Ninja form submissions as conversion in your analytics and advertising platform is easy and seamless, using Google Tag Manager and this event listener.</span></p>
<p><span data-preserver-spaces="true">Start by creating a custom HTML tag type in Google Tag Manager, copy the Ninja form event listener code, paste it in the tag, add a pageview or DOM ready trigger.</span></p>
<p><span data-preserver-spaces="true">The next step is to create a custom event trigger with an event name&nbsp;</span><strong><span data-preserver-spaces="true">[ninjaFormSubmission]</span></strong><span data-preserver-spaces="true">&nbsp;which happens only on successful form submissions.</span></p>
<p><span data-preserver-spaces="true">To capture the form ID, create a dataLayer variable with a key&nbsp;</span><strong><span data-preserver-spaces="true">[NFformID]</span></strong></p>
<p><span data-preserver-spaces="true">Finally, you can now connect your marketing tags/pixels using the custom event for Ninja form submission&nbsp;</span><strong><span data-preserver-spaces="true">[ninjaFormSubmission]&nbsp;</span></strong><span data-preserver-spaces="true">with the form ID variable, you can push the form ID to your analytics.</span></p>
<p>&nbsp;</p>
<p><strong>The creator of this code is&nbsp;<a href="https://chrisberkley.com/blog/ninja-forms-event-tracking-with-google-tag-manager/" target="_blank" rel="noopener">Chris Berkley</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'ninja-forms',
		logoPath: '/logos/ninja-forms.jpg'
	}, {
		title: 'Gravity Form',
		listDescription: `Track your Gravity Form submissions as conversions and fire your marketing tags/pixels on conversion.`,
		code: `<script type="text/javascript">
jQuery(document).ready(function() {
jQuery(document).bind("gform_confirmation_loaded", function(event, formID) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "formSubmissionSuccess",
formID: formID
});
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Gravity Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you are using the Gravity form on your website and you want to measure the form conversions in your analytics tools and advertising platform</span></p>
<p><span data-preserver-spaces="true">You will have to use the Gravity form event listener and Google Tag Manager to make this possible.</span></p>
<p><span data-preserver-spaces="true">First, create a custom HTML tag type, paste the event listener code there and fire it on pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Next, you’ll set up a custom event trigger with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[formSubmissionSuccess]</span></strong><span data-preserver-spaces="true">&nbsp;used to fire your marketing pixels/tags on successful Gravity form submissions.</span></p>
<p><span data-preserver-spaces="true">To capture the Gravity form ID, create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[formID].&nbsp;</span></strong><span data-preserver-spaces="true">&nbsp;you can push the form ID into your analytics as an event parameter.</span></p>
<p>&nbsp;</p>
<p>🏆 Credit</p>
<p><strong>The creator of this code is&nbsp;<a href="https://www.analyticsmania.com/post/track-gravity-forms-with-google-tag-manager/" target="_blank" rel="noopener">Julius Fedorovicius</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'gravity-form',
		logoPath: '/logos/gravity-form.jpg'
	}, {
		title: 'Drip Form',
		listDescription: `If you are using Drip forms to capture leads? Track your Drip form submissions conversions in Google Ads, GA, etc.`,
		code: `<script>
jQuery( document ).ready(function( $ ){
jQuery( document ).on("submitted.drip", function(ev, data){
console.log(data);
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'dripformsubmission',
'formdata': data
});
});
})
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Drip Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">To track Drip form conversions in your analytics and advertising platform, you’ll need Google Tag Manager, and the Drip form submits event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">Start by creating a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[dripformsubmission]</span></strong><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">the event happens only on successful submission of Drip forms</span></p>
<p><span data-preserver-spaces="true">To capture the form ID, field records, user location, and other info about the Drip account or form data, you can create a dataLayer for each of these, tracing the dot notation of the dataLayer object of the variable&nbsp;</span><strong><span data-preserver-spaces="true">[formdata]</span></strong><span data-preserver-spaces="true">&nbsp;to pick the data you need</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'drip-form',
		logoPath: '/logos/drip.jpg'
	}, {
		title: 'Tally Forms',
		listDescription: `Measure when users submit your Tally Form and fire your marketing tags and pixels for conversion tracking.`,
		code: `<script>
// code source is from Courtney at Code and Tonic (read here https://codeandtonic.com/blog/tally-forms-conversion-tracking)
// Determine if the browser supports "addEventListener" or "attachEvent" for event listening
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";

// Assign the event listener function to "eventer" based on what the browser supports
var eventer = window[eventMethod];

// If the browser uses "attachEvent", use "onmessage". Otherwise, use "message"
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

// Set up the event listener for messages from the child iFrame
eventer(messageEvent,function(e) {
// Check if the event contains "message" or "data" and assign the data to the "data" variable
var key = e.message ? "message" : "data";
var data = e[key];

// If the event data contains "event", we'll proceed further
if(data.includes("event")) { 
// Parse the JSON string from the event data
var dataParsed = JSON.parse(data);

// Check if the event is a "Tally.FormSubmitted" event
if(dataParsed.event == "Tally.FormSubmitted"){
// If the Tally form is submitted, push the 'tally_form_submit' event to the Data Layer
// Initialize the Data Layer if it doesn't already exist
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'tally_form_submit'
});
}
}
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Tally Forms Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Effortlessly track successful <a href="https://tally.so/" target="_blank" rel="noopener">Tally Form</a> submissions as conversions by utilising Google Tag Manager with the Tally Form event listener. The process is streamlined and can be initiated as follows:</span></p>
<p><span data-preserver-spaces="true">Commence by creating a custom HTML tag in Google Tag Manager. Copy the Tally Forms event listener code, paste it into the tag, and associate it with a pageview or DOM-ready trigger.</span></p>
<p><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true">&nbsp;Opt for executing the code on a DOM-Ready trigger type.</span></p>
<p><span data-preserver-spaces="true">The subsequent step involves creating a custom event trigger that exclusively occurs upon successful form submissions, bearing the event name&nbsp;</span><strong><span data-preserver-spaces="true">[tally_form_submit]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">Subsequently, seamlessly activate your marketing conversion tags/pixels through the custom event you’ve established for successful Tally Form submissions, denoted as&nbsp;</span><strong><span data-preserver-spaces="true">[tally_form_submit]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">Additionally, implement your analytics event and conversion tags, such as Google Analytics (GA4) event tags, Piwik Pro, Mixpanel, etc.</span></p>
<p><span data-preserver-spaces="true">Ensure thorough testing of your setup before finalising and publishing.</span></p>
<p><span data-preserver-spaces="true">🏆 Credit: This code was created and is owned by <strong>Courtney at <a href="https://codeandtonic.com/blog/tally-forms-conversion-tracking" target="_blank" rel="noopener">Code and Tonic</a>.</strong></span></p>
								</div>
				</div>
					</div>`,
		slug: 'tally-forms',
		logoPath: '/logos/tally.jpg'
	}, {
		title: 'WSForm',
		listDescription: `Track WSForm errors and submissions as conversions to enhance your marketing and advertising strategies.`,
		code: `<script>
(function () {
// Ensure jQuery is available
if (typeof jQuery === 'undefined') {
console.error('jQuery is required for WSForm event tracking.');
return;
}

// Function to push events to dataLayer
function pushToDataLayer(eventType, formObject, formId, instanceId) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: eventType,
form_id: formId,
instance_id: instanceId,
form_object: formObject,
event_type: eventType
});
console.log('Pushed to dataLayer:', eventType, formId, instanceId);
}

// Attach event listeners
jQuery(document).on('wsf-submit-before', function (event, formObject, formId, instanceId) {
pushToDataLayer('wsform_submit_clicked', formObject, formId, instanceId);
});

jQuery(document).on('wsf-submit-success', function (event, formObject, formId, instanceId) {
pushToDataLayer('wsform_submit_success', formObject, formId, instanceId);
});

jQuery(document).on('wsf-submit-error', function (event, formObject, formId, instanceId) {
pushToDataLayer('wsform_submission_error', formObject, formId, instanceId);
});

console.log('WSForm event listeners initialized.');
})();
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  WSForm Submit Click, Submission Errors and Successful Submissions as Conversion with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Here are instructions on using the <a href="https://wsform.com/" target="_blank" rel="noopener">WSForm</a> event listener script in combination with Google Tag Manager (GTM) to track key form interactions, including submit button clicks, submission errors, and successful submissions.</p>
<p>These interactions can be recorded as events in platforms like Google Analytics (GA4), Piwik Pro, and Mixpanel, and as conversions in Google Ads, Meta Ads, etc.</p>
<p><span data-preserver-spaces="true">Follow the step-by-step instructions below </span><span data-preserver-spaces="true">to seamlessly implement WSForm tracking in your GTM container</span><span data-preserver-spaces="true">.</span></p>
<h3><strong>Step 1: Create a Custom HTML Tag &amp; Add the WSForm Event Listener Script</strong></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Start by copying the WSForm event listener script provided below and adding it to a new </span><strong><span data-preserver-spaces="true">Custom HTML Tag</span></strong><span data-preserver-spaces="true"> in GTM.</span></p>
<ol>
<li><span data-preserver-spaces="true">Navigate to GTM and create a new tag of type </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">Paste the following WSForm event listener script into the tag:</span></li>
<li><span data-preserver-spaces="true">Set the trigger for this tag to </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true">, ensuring the script initializes </span><span data-preserver-spaces="true">properly</span><span data-preserver-spaces="true"> when the page loads.</span></li>
</ol>
<p><span data-preserver-spaces="true">You can also utilize the Window Loaded trigger if DOM Ready </span><span data-preserver-spaces="true">doesn’t</span><span data-preserver-spaces="true"> work </span><span data-preserver-spaces="true">for you</span><span data-preserver-spaces="true">.</span></p>
<h4><span data-preserver-spaces="true">What the WSForm Event Listener Script Does:</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">This script listens for specific WSForm interactions and pushes events to the dataLayer. The following events </span><span data-preserver-spaces="true">are tracked</span><span data-preserver-spaces="true">:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">wsform_submit_clicked</span></strong><span data-preserver-spaces="true">: Fires when the submit button </span><span data-preserver-spaces="true">is clicked</span><span data-preserver-spaces="true">.</span></li>
<li><strong><span data-preserver-spaces="true">wsform_submit_success</span></strong><span data-preserver-spaces="true">: Fires when a form submission is successful.</span></li>
<li><strong><span data-preserver-spaces="true">wsform_submission_error</span></strong><span data-preserver-spaces="true">: Fires when a submission error occurs.</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 2: Create Custom Event Triggers</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, </span><span data-preserver-spaces="true">set up</span><span data-preserver-spaces="true"> custom event triggers in GTM to capture the WSForm interactions.</span></p>
<ol>
<li><span data-preserver-spaces="true">Go to the </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> section in GTM.</span></li>
<li><span data-preserver-spaces="true">Create a new </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> for each interaction:</span></li>
</ol>
<ul>
<li><strong><span data-preserver-spaces="true">Trigger Name</span></strong><span data-preserver-spaces="true">: CE – WSForm Submit Clicked</span>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: wsform_submit_clicked</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Trigger Name</span></strong><span data-preserver-spaces="true">: CE – WSForm Submit Success</span>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: wsform_submit_success</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">Trigger Name</span></strong><span data-preserver-spaces="true">: CE – WSForm Submission Error</span>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: wsform_submission_error</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">These triggers will be used</span><span data-preserver-spaces="true"> to fire your analytics and marketing tags.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define DataLayer Variables</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To add more context to your WSForm events, create the following dataLayer variables in GTM:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">form_id</span></strong><span data-preserver-spaces="true">: Captures the WSForm form ID.</span></li>
<li><strong><span data-preserver-spaces="true">instance_id</span></strong><span data-preserver-spaces="true">: Captures the WSForm instance ID.</span></li>
<li><strong><span data-preserver-spaces="true">form_object.label</span></strong><span data-preserver-spaces="true">: Captures the WSForm form name (use the dataLayer key</span><span data-preserver-spaces="true"> “</span><span data-preserver-spaces="true">form_object.label</span><span data-preserver-spaces="true">“</span> <span data-preserver-spaces="true">for this).</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Once your variables and triggers are ready, create your marketing tags (e.g., GA4 Events, Meta Pixels) and attach the appropriate WSForm triggers. Use the variables in the tag configurations to provide additional context for the events.</span></p>
<p><span data-preserver-spaces="true">For example, in a GA4 Event Tag configuration:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: wsform_event</span></li>
<li><strong><span data-preserver-spaces="true">Event Parameters</span></strong><span data-preserver-spaces="true">:</span>
<ul>
<li><span data-preserver-spaces="true">form_id → {{dlv – form_id}}</span></li>
<li><span data-preserver-spaces="true">instance_id → {{dlv – instance_id}}</span></li>
<li><span data-preserver-spaces="true">form_name → {{dlv – form_object.label}}</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">This setup ensures that each WSForm interaction </span><span data-preserver-spaces="true">is accurately tracked</span><span data-preserver-spaces="true"> across your analytics and marketing platforms.</span></p>
<p><strong>Additional Notes:</strong></p>
<p><span data-preserver-spaces="true">The WSForm event listener script is Tag Manager agnostic, meaning </span><span data-preserver-spaces="true">it can also be used</span><span data-preserver-spaces="true"> with other Tag Management Solutions and not just limited to GTM, you could also use it without a tag manager. However, the implementation principles remain the same.</span></p>
<p><span data-preserver-spaces="true">You can speed up the implementation time by </span><span data-preserver-spaces="true">scrolling down this resource page to find</span><span data-preserver-spaces="true"> a downloadable premade GTM recipe template.</span><span data-preserver-spaces="true"> Download, customize, and use it to track WSForm interactions like submit button clicks, submission errors, and successful submissions with minimal effort.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'wsform',
		logoPath: '/logos/wsform.jpg'
	}, {
		title: 'Amelia Event Registration Form',
		listDescription: `Monitor user interactions and successful submissions on Amelia Event Forms to trigger tracking pixels seamlessly.`,
		code: `<script>
(function() {
// Initialize dataLayer if it doesn't exist
window.dataLayer = window.dataLayer || [];

// Utility function to push events to dataLayer
function pushToDataLayer(eventType, eventData) {
window.dataLayer.push({
event: "ameliaActivity",
ameliaEvent: eventType,
ameliaData: eventData || {}
});
}

// Define Amelia hooks
window.ameliaActions = {
// Form loaded
ViewContent: function(success, error, data) {
pushToDataLayer("formLoaded", data);
console.log("Amelia Hook: Form Loaded", data);
},

// Event selected
SelectEvent: function(success, error, data) {
pushToDataLayer("eventSelected", data);
console.log("Amelia Hook: Event Selected", data);
},

// Info step loaded
InitInfoStep: function(success, error, data) {
pushToDataLayer("infoStepLoaded", data);
console.log("Amelia Hook: Info Step Loaded", data);
},

// Payment step loaded
InitiateCheckout: function(success, error, data) {
pushToDataLayer("paymentStepLoaded", data);
console.log("Amelia Hook: Payment Step Loaded", data);
},

// Confirm button clicked
beforeBooking: function(success, error, data) {
pushToDataLayer("confirmButtonClicked", data);
console.log("Amelia Hook: Confirm Button Clicked", data);

// Call success callback to continue the booking
if (typeof success === "function") {
success();
}
},

// On-site booking completed
Schedule: function(success, error, data) {
pushToDataLayer("onSiteBookingCompleted", data);
console.log("Amelia Hook: On-Site Booking Completed", data);
},

// Online booking completed
Purchased: function(success, error, data) {
pushToDataLayer("onlineBookingCompleted", data);
console.log("Amelia Hook: Online Booking Completed", data);
}
};

// Log a warning if Amelia hooks aren't available
if (typeof window.ameliaActions === "undefined") {
console.warn("Amelia hooks are not properly initialized. Ensure this script runs after Amelia is loaded.");
}
})();
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Amelia Event Form Interactions and Registration Completions In Google Analytics or Ads Pixels with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Here, I’ll walk you through using the Amelia booking form event listener with Google Tag Manager (GTM) to track form interactions and event registrations as events and conversions in analytics platforms like Google Analytics (GA4), Piwik Pro, and others. By following these steps, you can capture key data points from your Amelia forms to enhance your marketing and analytics capabilities.</p>
<h3><span data-preserver-spaces="true">Step 1: Add the Event Listener Script</span></h3>
<p><span data-preserver-spaces="true">Begin by creating a new </span><strong><span data-preserver-spaces="true">Custom HTML Tag</span></strong><span data-preserver-spaces="true"> in Google Tag Manager. Copy the provided Amelia event listener script and paste it into the tag.</span></p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Set the trigger type for this tag to </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> to ensure the event listener initializes after the page and the Amelia form </span><span data-preserver-spaces="true">is</span><span data-preserver-spaces="true"> fully loaded.</span></p>
<h4><span data-preserver-spaces="true">What the Event Listener Does</span></h4>
<p><span data-preserver-spaces="true">The <a href="https://wpamelia.com/" target="_blank" rel="noopener">Amelia event form</a> event listener tracks user interactions with the booking form and pushes them into the dataLayer as events. The event name for all interactions is ameliaActivity. The listener captures key moments in the booking process, including:</span></p>
<ul>
<li><span data-preserver-spaces="true">Form loaded</span></li>
<li><span data-preserver-spaces="true">Event selected</span></li>
<li><span data-preserver-spaces="true">Information step loaded</span></li>
<li><span data-preserver-spaces="true">Payment step loaded</span></li>
<li><span data-preserver-spaces="true">Booking confirmed</span></li>
<li><span data-preserver-spaces="true">Booking completed (on-site or online)</span></li>
</ul>
<p><span data-preserver-spaces="true">By using</span><span data-preserver-spaces="true"> this script, you can track the complete user journey, from viewing the form to completing a registration.</span></p>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></h3>
<p><span data-preserver-spaces="true">Next, create a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM. Set the event name to </span><strong><span data-preserver-spaces="true">ameliaActivity</span></strong><span data-preserver-spaces="true">, </span><span data-preserver-spaces="true">which is</span><span data-preserver-spaces="true"> the name emitted by the event listener for all tracked interactions. </span><span data-preserver-spaces="true">This trigger will </span><span data-preserver-spaces="true">be used</span><span data-preserver-spaces="true"> to</span><span data-preserver-spaces="true"> fire your tags whenever an Amelia interaction is detected.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Set Up Data Layer Variables</span></h3>
<p><span data-preserver-spaces="true">To extract detailed information about each Amelia interaction, create the following Data Layer Variables in GTM:</span></p>
<ol>
<li><strong><span data-preserver-spaces="true">ameliaEvent</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: Returns the type of interaction (e.g., form loaded, event selected, booking completed).</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.event.id</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The unique ID of the event </span><span data-preserver-spaces="true">being registered for</span><span data-preserver-spaces="true">.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.event.name</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The name of the event.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.event.price</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The price of the event.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.customer.firstName</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The first name provided during registration.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.customer.lastName</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The last name that was </span><span data-preserver-spaces="true">provided</span><span data-preserver-spaces="true"> during the event registration.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.customer.email</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The email address submitted during registration.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.customer.phone</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The phone number submitted during registration.</span></li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaData.booking.customer.id</span></strong>
<ul>
<li><strong><span data-preserver-spaces="true">Description</span></strong><span data-preserver-spaces="true">: The unique ID of the customer registering for the event.</span></li>
</ul>
</li>
</ol>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Explore the </span><span data-preserver-spaces="true">full</span><span data-preserver-spaces="true"> ameliaData object for additional information about form interactions that might be valuable for your analytics or marketing needs.</span></p>
<h3><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h3>
<p><span data-preserver-spaces="true">Once your variables and triggers </span><span data-preserver-spaces="true">are set up</span><span data-preserver-spaces="true">, create your marketing tags in GTM (e.g., Google Analytics (GA4), Piwik Pro, Facebook Pixel). Attach the custom event trigger to these tags and use the variables in the tag configuration to add context to the Amelia booking events. For example:</span></p>
<ul>
<li><span data-preserver-spaces="true">Use ameliaEvent to classify the type of interaction.</span></li>
<li><span data-preserver-spaces="true">Use ameliaData.booking.customer.email to pass customer email information to your analytics platform (if compliant with privacy regulations).</span></li>
<li>Use the event <strong><span data-preserver-spaces="true">ameliaData.event&nbsp;</span></strong><span data-preserver-spaces="true">object to capture the event-related information like name, ID, price, etc.<br>
</span></li>
</ul>
<p><strong>Implementation Notes:</strong></p>
<p><span>The Amelia event listener script is&nbsp;<strong>usable in other</strong> Tag Management Solutions (TMS) and is not just limited to GTM. However, the setup steps and principles remain the same.</span></p>
<p><span data-preserver-spaces="true">Scroll down this resource page to download a GTM recipe template to save time.</span><span data-preserver-spaces="true"> Customize it for your setup to quickly start tracking Amelia form interactions and conversions.</span></p>
<p><span data-preserver-spaces="true">With this implementation, </span><span data-preserver-spaces="true">you’ll</span><span data-preserver-spaces="true"> have a robust setup to track and analyze </span><span data-preserver-spaces="true">Amelia’s</span><span data-preserver-spaces="true"> event registration form data, enabling more informed marketing decisions and deeper audience insights.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'amelia-event-registration-form',
		logoPath: '/logos/amelia.jpg'
	}, {
		title: 'FormStack',
		listDescription: `You will be able to track Formstack form submissions as conversions using GTM and this event listener.`,
		code: ``,
		description: ``,
		slug: 'formstack',
		logoPath: '/logos/formstack.jpg'
	}, {
		title: 'Contact Form 7',
		listDescription: `Contact Form 7 event listener makes it possible to measure CF7 form submissions as conversions.`,
		code: `<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
window.dataLayer.push({
"event" : "cf7submission",
"formId" : event.detail.contactFormId,
"response" : event.detail.inputs
})
}); 
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Contact Form 7 submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking when a user converts by submitting your Contact Form 7 forms is easy using Google Tag Manager and the CF7 event listener.</span></p>
<p><span data-preserver-spaces="true">To track CF7 forms, create a custom HTML tag type, paste the contact form 7 event listener code in this tag and make it fire on pageview.</span></p>
<p><span data-preserver-spaces="true">Next is to create a custom event trigger with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[cf7submission],</span></strong><span data-preserver-spaces="true">&nbsp;which gets fired on successful CF7 form submissions.</span></p>
<p><span data-preserver-spaces="true">Add your marketing tags and conversion pixels to the trigger. If you want to capture the form ID and form input, you should create the following dataLayer variables;</span></p>
<p><strong><span data-preserver-spaces="true">[formId]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the fom ID</span></p>
<p><strong><span data-preserver-spaces="true">[response]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the form inputs that are the records entered by the user</span></p>
<p>&nbsp;</p>
<p><strong>The creator of this code is <a href="https://www.analyticsmania.com/post/contact-form-7-event-tracking-with-google-tag-manager/" target="_blank" rel="noopener">Julius Fedorovicius</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'contact-form-7',
		logoPath: '/logos/contact-form-7.jpg'
	}, {
		title: 'Elementor Form',
		listDescription: `Measure Elementor form submissions as conversion and trigger your marketing pixels/tags on the actions.`,
		code: `<script>jQuery( document ).ready(function( $ ){
jQuery( document ).on('submit_success', function(){

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'elementorFormSubmitted'
});
});
});</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Elementor Form Submission with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">To track Elementor form conversions in your analytics and advertising platform, you’ll need Google Tag Manager, and the Elementor form submits event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">Start by creating a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">Create a custom event with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[elementorFormSubmitted]</span></strong><span data-preserver-spaces="true">&nbsp;</span></p>
<p><span data-preserver-spaces="true">the event happens only on successful submission of Drip forms</span></p>
<p><span data-preserver-spaces="true">Connect your marketing tags/pixel to this trigger, debug, test and publish once everything is okay.</span></p>
<p><strong>🏆 Credit: Created by <a href="https://youtu.be/MYr1pviuSEY?t=1182" target="_blank" rel="noopener">J J Reynolds&nbsp;</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'elementor-form',
		logoPath: '/logos/elementor.jpg'
	}, {
		title: 'Marketo Form',
		listDescription: `Are you using the Marketo form to capture leads? You can measure form conversions and enhance your data.`,
		code: `<script type="text/javascript">
var pollFormElementsIntervalId;

function pollFormElements() {
var a = document.querySelectorAll("form[id^='mktoForm_']");
if (a instanceof NodeList) {
clearInterval(pollFormElementsIntervalId);
for (var b = 0; b < a.length; b++) attachEventListener(a[b])
}
}

function attachEventListener(a) {
a.addEventListener("submit", function(b) {
setTimeout(function() {
var c = 0 === a.querySelectorAll(".mktoInvalid").length;
c && window.dataLayer.push({
event: "marketo_form_submission",
formID: a.id
})
}, 100)
})
}
pollFormElementsIntervalId = setInterval(pollFormElements, 500);
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Marketo Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measure Marketo form submissions as conversion in your ads platform and your analytics tools (Google Analytics, Heap, Piwik Pro, Mixpanel, Amplitude, etc.)</span></p>
<p><span data-preserver-spaces="true">To implement the conversion tracking, you’ll need Google Tag Manager and the Marketo form event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[marketo_form_submission]</span></strong><span data-preserver-spaces="true">, which gets fired on all Marketo form submissions.</span></p>
<p><span data-preserver-spaces="true">To capture the Marketo form ID, you’ll create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[formID]</span></strong></p>
<p><span data-preserver-spaces="true">The Last, step is to create your marketing tag/pixels, add the appropriate trigger and the event parameters you need for analysis.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'marketo-form',
		logoPath: '/logos/marketo.jpg'
	}, {
		title: 'Mailchimp For WP Form',
		listDescription: `Track conversions of your WordPress form built with the Mailchimp For WordPress plugin using this event.`,
		code: `<script type="text/javascript">
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
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Mailchimp for Wordpress Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Are you using Mailchimp for the WordPress plugin for lead generation?</span></p>
<p><span data-preserver-spaces="true">(<a href="https://www.mc4wp.com/">https://www.mc4wp.com/</a>)&nbsp;</span></p>
<p><span data-preserver-spaces="true">then you’ll find the event listener on this page helpful in measuring Mailchimp for WordPress form submissions as conversions.</span></p>
<p><span data-preserver-spaces="true">Tracking Mailchimp For WordPress Form conversions and pushing the data to your analytics or advertising platform is possible and seamless using Google Tag Manager and the Podia event listener script on this page.</span></p>
<p><span data-preserver-spaces="true">To implement this, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event for the type of Mailchimp For WordPress form event.</span></p>
<p><strong><span data-preserver-spaces="true">[MailchimpFormSuccess]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; fired if the form is submitted successfully</span></p>
<p><strong><span data-preserver-spaces="true">[MailchimpFormSubscribed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; fired if the form was used to subscribe</span></p>
<p><strong><span data-preserver-spaces="true">[MailchimpFormError]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; fired if the form was submitted with errors</span></p>
<p><strong><span data-preserver-spaces="true">[MailchimpFormUnsubscribed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; fired if the form is used to unsubscribe</span></p>
<p><strong><span data-preserver-spaces="true">[MailchimpFormStarted]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; fired once the user starts filling in a form (if you need to measure form abandonment)</span></p>
<p><span data-preserver-spaces="true">Also, you can capture the form ID and name by creating the following dataLayer variables with these keys;</span></p>
<p><strong><span data-preserver-spaces="true">[formID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the form ID</span></p>
<p><strong><span data-preserver-spaces="true">[formName]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the form name</span></p>
<p><span data-preserver-spaces="true">You can fire your marketing tags/pixels on the form or conversion event using the appropriate trigger created for the Mailchimp for WordPress Form.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'mailchimp-for-wp-form',
		logoPath: '/logos/mailchimp.jpg'
	}, {
		title: 'Gist (Formerly ConvertFox)',
		listDescription: `If you use Gist for lead generation, you can use this event listener to measure conversions and user interactions in Gist.`,
		code: `<script>
// Triggers when an article has been viewed
document.addEventListener('article:viewed', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Article Viewed",
'gistArticleID': data.detail.articleId,
'gistArticleURL': data.detail.articleURL,
'gistArticleTitle': data.detail.articleTitle,
'gistArticleAurthorID': data.detail.authorId
});
}, false);
// Triggers when a visitor leaves a feedback on any article
document.addEventListener('article:feedback', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Article Feedback Submitted",
'gistArticleID': data.detail.articleId,
'gistArticleRating': data.detail.rating.score
});
}, false);
// Triggers when an article has been searched
document.addEventListener('article:searched', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Article Searched",
'gistSearchTerm': data.detail.searchTerm,
'gistSearchResultCount': data.detail.resultsCount
});
}, false);
// Triggers when a button response in a chatbot has been clicked
document.addEventListener('chatbot:buttonClicked', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Chatbot Message Button Clicked",
'gistConversationID': data.detail.conversationId,
'gistBotButtonText': data.detail.buttonText,
'gistBotButtonID': data.detail.buttonId,
'gistBotQuestionID': data.detail.questionId,
'gistBotCreation': data.detail.createdAt
});
}, false);
// Triggers when a chat bot has been triggered
document.addEventListener('chatbot:fired', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Welcome Message of The Chatbot Shown",
'gistConversationID': data.detail.conversationId,
'gistBotButtonText': data.detail.buttonText,
'gistBotButtonID': data.detail.buttonId,
'gistBotQuestionID': data.detail.questionId,
'gistBotCreation': data.detail.createdAt
});
}, false);
// Triggers when the Messenger has been opened
document.addEventListener('messenger:opened', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Opened Gist Widget"
});
}, false);
// Triggers when the Messenger has been closed
document.addEventListener('messenger:closed', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Closed Gist Widget"
});
}, false);
// Triggers when a new conversation has started
document.addEventListener('conversation:started', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Conversation Has Started",
'gistConversationID': data.detail.conversationId
});
}, false);
// Triggers when a conversation has been opened
document.addEventListener('conversation:opened', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Previous Conversation Opened",
'gistConversationID': data.detail.conversationId
});
}, false);
// Triggers when a satisfaction rating has been left
document.addEventListener('conversation:feedback', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Chat Rating Submitted",
'gistConversationID': data.detail.conversationId,
'gistConversationRating': data.detail.rating
});
}, false);
// Triggers when a message has been sent
document.addEventListener('message:sent', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "User Sends Message",
'gistConversationID': data.detail.conversationId,
'gistMessage': data.detail.message
});
}, false);
// Triggers when a message has been received
document.addEventListener('message:received', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "User Receives Message",
'gistConversationID': data.detail.conversationId,
'gistMessage': data.detail.message
});
}, false);
// Triggers when an email address has been captured
document.addEventListener('email:captured', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Email Address Captured",
'gistUserEmail': data.detail.email
});
}, false);
// Triggers when the GDPR form has been submitted
document.addEventListener('gdpr:clicked', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "GDPR Consent Submitted",
'gistUserEmail': data.detail.email,
'gistGDPRStatus': data.detail.accepted,
'gistVisitorID': data.detail.visitorId
});
}, false);
// Triggers when a meeting has been requested
document.addEventListener('meeting:requested', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Gist Meeting Booking Requested",
'gistConversationID': data.detail.conversationId
});
}, false);
// Triggers when a meeting has been scheduled
document.addEventListener('meeting:booked', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "Gist Meeting Scheduled",
'gistMeeting': data.detail.meeting
});
}, false);
// Triggers when an in-app chat message has been sent
document.addEventListener('triggeredMessage:fired', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "In-app Chat Message Shown",
'gistConversationID': data.detail.conversationId,
'gistMessage': data.detail.message,
'gistAgentID': data.detail.assistantId
});
}, false);
// Triggers when an in-app chat message has been clicked
document.addEventListener('triggeredMessage:clicked', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "In-app Chat Message Clicked",
'gistConversationID': data.detail.conversationId,
'gistMessage': data.detail.message,
'gistAgentID': data.detail.assistantId
});
}, false);
// Triggers when an in-app chat message has been dismissed
document.addEventListener('triggeredMessage:dismissed', function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'gist_action',
'gistAction': "In-app Chat Message Dismissed",
'gistConversationID': data.detail.conversationId,
'gistMessage': data.detail.message,
'gistAgentID': data.detail.assistantId
});
}, false);
</script>`,
		description: `<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-396f6426" data-id="396f6426" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Gist Interactions &amp; Conversions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measuring Gist (Formerly Convertfox) activity in your analytics tools such as Google Analytics, Heap, Piwik Pro, Mixpanel, Amplitude, etc. gives you valuable insights into the impact these interactions have on your marketing funnel, conversions, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Gist interaction and conversion tracking, you’ll need Google Tag Manager and the Convertflow event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Gist script through Google Tag Manager, please use the DOM ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">What the Convertflow event listener does, is fire an event on conversion and every user interaction with Gist.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[gist_action]</span></strong><span data-preserver-spaces="true">, which gets fired on all chat activity</span></p>
<p><span data-preserver-spaces="true">To get more information on what chat activity happened, you’ll need to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[gistAction]</span></strong></p>
<p><strong><span data-preserver-spaces="true">[gistAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">Article Viewed</span></li>
<li><span data-preserver-spaces="true">Article Feedback Submitted</span></li>
<li><span data-preserver-spaces="true">Article Searched</span></li>
<li><span data-preserver-spaces="true">Chatbot Message Button Clicked</span></li>
<li><span data-preserver-spaces="true">Welcome Message of The Chatbot Shown</span></li>
<li><span data-preserver-spaces="true">Opened Gist Widget</span></li>
<li><span data-preserver-spaces="true">Closed Gist Widget</span></li>
<li><span data-preserver-spaces="true">Conversation Has Started</span></li>
<li><span data-preserver-spaces="true">Previous Conversation Opened</span></li>
<li><span data-preserver-spaces="true">Chat Rating Submitted</span></li>
<li><span data-preserver-spaces="true">User Sends Message</span></li>
<li><span data-preserver-spaces="true">User Receives Message</span></li>
<li><span data-preserver-spaces="true">Email Address Captured</span></li>
<li><span data-preserver-spaces="true">GDPR Consent Submitted</span></li>
<li><span data-preserver-spaces="true">Gist Meeting Booking Requested</span></li>
<li><span data-preserver-spaces="true">Gist Meeting Scheduled</span></li>
<li><span data-preserver-spaces="true">In-app Chat Message Shown</span></li>
<li><span data-preserver-spaces="true">In-app Chat Message Clicked</span></li>
<li><span data-preserver-spaces="true">In-app Chat Message Dismissed</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[gistAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Gist interactions.</span></p>
<p><span data-preserver-spaces="true">You can enrich your event data, by creating dataLayer variables in Google Tag Manager, which captures useful information about the event, some of the dataLayer variables keys are;</span></p>
<p><strong><span data-preserver-spaces="true">[gistArticleID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns article ID for article viewed and rating event&nbsp;</span></p>
<p><strong><span data-preserver-spaces="true">[gistArticleURL]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the article URL for article viewed event</span></p>
<p><strong><span data-preserver-spaces="true">[gistArticleTitle]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the article title for article viewed event</span></p>
<p><strong><span data-preserver-spaces="true">[gistArticleAurthorID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the article aurthor ID for article viewed event</span></p>
<p><strong><span data-preserver-spaces="true">[gistArticleRating]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the article rating for article feedback event</span></p>
<p><strong><span data-preserver-spaces="true">[gistSearchTerm]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns search term in the article section of the chat widget</span></p>
<p><strong><span data-preserver-spaces="true">[gistSearchResultCount]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the search result count</span></p>
<p><strong><span data-preserver-spaces="true">[gistConversationID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the conversation ID for certain chat events</span></p>
<p><strong><span data-preserver-spaces="true">[gistConversationRating]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat rating for chat rate submitted events</span></p>
<p><strong><span data-preserver-spaces="true">[gistMessage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat message for chat message event</span></p>
<p><strong><span data-preserver-spaces="true">[gistUserEmail]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; The visitor email when capture event and GDPR consent event happens</span></p>
<p><strong><span data-preserver-spaces="true">[gistMeeting]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the meeting data in object</span></p>
<p><strong><span data-preserver-spaces="true">[gistVisitorID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user visitor ID when GDPR consent is given</span></p>
<p><strong><span data-preserver-spaces="true">[gistBotButtonText]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chat bot button text</span></p>
<p><strong><span data-preserver-spaces="true">[gistBotButtonID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the chatbot button ID</span></p>
<p><strong><span data-preserver-spaces="true">[gistAgentID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the Operator ID for in-app message event</span></p>
<p><strong><span data-preserver-spaces="true">[gistGDPRStatus]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns GDPR status</span></p>
<p><span data-preserver-spaces="true">After creating the dataLayer variables, create your marketing tag/pixels, add the appropriate trigger and the event parameters you need for analysis.</span></p>
<p><span data-preserver-spaces="true">Once done, debug to ensure it’s working fine, and publish once everything is okay.</span></p>
<p><span data-preserver-spaces="true">Having the data in your analytics tools, such as Google Analytics, Mixpanel, Piwik Pro, Heap, Fullstory, Amplitude, etc. gives you actionable insights into your marketing and customer support strategy.</span></p>
<p><span data-preserver-spaces="true">You can also use the data to understand how these chat interactions impacts conversions, website engagements, your marketing funnel and other business KPIs.</span></p>
								</div>
				</div>
					</div>
		</div>`,
		slug: 'gist',
		logoPath: '/logos/gist.jpg'
	}, {
		title: 'PaperForm',
		listDescription: `Track paper form submissions as conversions and activate your marketing pixels/tags based on these actions.`,
		code: `<script>
//fires on actual successful PaperForm submission
window.addEventListener('PaperformSubmission', function(e) { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'paperformSubmissionEvent',
'eventType': e.type,
'form_ID': e.detail.form_id,
'submission_ID': e.detail.submission_id,
'event_timestamp': e.timeStamp,
'formData': e.detail.data
});
console.log("DD - paperform submitted") 
})

//Fires on paperForm form step change

window.addEventListener('PaperformPageChange', function(e) { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'paperformStepChange',
'eventType': e.type,
'form_ID': e.detail.form_id,
'paperForm_Step': e.detail.currentPage,
'paperForm_Total_Step': e.detail.totalPages,
'event_timestamp': e.timeStamp
});

console.log("DD - paperform step change") 
})
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  PaperForm Form Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Once you’ve followed the provided instructions on implementing and utilising the Paperform event listener, you’ll enhance your marketing and analytics efforts by accurately tracking step completion and successful conversion actions in forms created with <a href="https://paperform.co/" target="_blank" rel="noopener">PaperForm</a>.</span></p>
<p><span data-preserver-spaces="true">The implementation process commences with the creation of a custom HTML tag type in Google Tag Manager. Subsequently, you should copy the PaperForm event listener JavaScript code into this newly created tag.</span></p>
<p><span data-preserver-spaces="true">The next step in the setup involves adding a page view or DOM-Ready trigger to the tag.</span></p>
<p><span data-preserver-spaces="true">Upon successful implementation, the code emits two dataLayer events when a user successfully submits a PaperForm form with the event name [</span><strong><span data-preserver-spaces="true">paperformSubmissionEvent</span></strong><span data-preserver-spaces="true">].</span></p>
<p><span data-preserver-spaces="true">Additionally, a second dataLayer event is triggered when a user advances or returns to a different step in a form built on PaperForm. This event is named [</span><strong><span data-preserver-spaces="true">paperformStepChange</span></strong><span data-preserver-spaces="true">].</span></p>
<p><span data-preserver-spaces="true">To activate your marketing tags or pixels, create two custom event triggers for conversion and step change events.</span></p>
<ol>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">paperformSubmissionEvent</span></strong><span data-preserver-spaces="true">] -&gt; For successful form submissions</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">paperformStepChange</span></strong><span data-preserver-spaces="true">] -&gt; For form step changes</span></li>
</ol>
<p><span data-preserver-spaces="true">For a more precise configuration of your trigger conditions or capturing form details, such as form ID and form step reference ID, consider utilising the following dataLayer variables as event parameters:</span></p>
<ul>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">form_ID</span></strong><span data-preserver-spaces="true">] -&gt; Returns the PaperForm form ID</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">paperForm_Step</span></strong><span data-preserver-spaces="true">] -&gt; Provides the step reference in the form</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">submission_ID</span></strong><span data-preserver-spaces="true">] -&gt; Available on the successful PaperForm form submission event, representing the ID of the form submission</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">formData</span></strong><span data-preserver-spaces="true">] -&gt; Contains the form data (check compliance)</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">event_timestamp</span></strong><span data-preserver-spaces="true">] -&gt; Reflects the timestamp of the event</span></li>
<li><span data-preserver-spaces="true">[</span><strong><span data-preserver-spaces="true">paperForm_Total_Step</span></strong><span data-preserver-spaces="true">] -&gt; Represents the total steps available in a multi-step PaperForm form</span></li>
</ul>
<p><span data-preserver-spaces="true">Include these triggers and parameters in your event tags for Google Analytics (GA4), Piwik Pro, Mixpanel, and other platforms.</span></p>
<p><span data-preserver-spaces="true">For successful PaperForm form submissions, consider tracking them as conversions in Google Ads, Meta Ads, LinkedIn Ads, etc.</span></p>
<p><span data-preserver-spaces="true">It is crucial to thoroughly test your implementations before publishing them in <a href="https://marketingplatform.google.com/about/tag-manager/" target="_blank" rel="noopener">Google Tag Manager</a>.</span></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'paperform',
		logoPath: '/logos/paperform.jpg'
	}, {
		title: 'Typeform',
		listDescription: `Ensure you always complete all Type form conversions by monitoring successful Type form submissions made by users.`,
		code: `<script>
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
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Typeform Submissions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Elevate your marketing insights with Typeform conversion data. Use embedded Typeform forms for audience engagement and lead generation. You can easily track successful form submissions as conversions and form step changes as interactions using Google Tag Manager (GTM) and this Typeform event listener code.</span></p>
<p><span data-preserver-spaces="true">Begin by creating a custom HTML tag type where you can conveniently paste the listener code. Once implemented, the code generates a dataLayer event when a user successfully submits a Typeform form with the event name [typeform_submitted].</span></p>
<p><span data-preserver-spaces="true">When a user proceeds or goes back to a different step in a form, an event named [typeform_step_change] is triggered.</span></p>
<p><span data-preserver-spaces="true">To enable the firing of your marketing tags/pixels, you need to create two custom event triggers using the conversion and step change event names:</span></p>
<ul>
<li><span data-preserver-spaces="true">[typeform_submitted] -&gt; For successful form submissions</span></li>
<li><span data-preserver-spaces="true">[typeform_step_change] -&gt; for when the form step changes.</span></li>
</ul>
<p><span data-preserver-spaces="true">To further narrow down your trigger conditions or capture form details such as form ID and form step reference ID, you can use the following dataLayer variables as event parameters:</span></p>
<ul>
<li><span data-preserver-spaces="true">[typeFormID] -&gt;which returns the Typeform form ID</span></li>
<li><span data-preserver-spaces="true">[stepReference] -&gt;which returns the step reference in the form.</span></li>
</ul>
<p><span data-preserver-spaces="true">You can now include triggers and parameters in your event tag for Google Analytics, Piwik Pro, Mixpanel, and other platforms.</span></p>
<p>&nbsp;</p>
<p>Credit: Code initially created by <a href="https://codeandtonic.com/blog/typeform-google-ads-conversion-tracking-guide" target="_blank" rel="noopener">Codeandtonic</a> (we only modified the code)</p>
								</div>
				</div>
					</div>`,
		slug: 'typeform',
		logoPath: '/logos/typeform.jpg'
	}
];

export const listenerCardsVideo: ListenerCardProps[] = [
	{
		title: 'Vimeo',
		listDescription: `Track your Vimeo video interactions in Google Analytics and other platform using this event listener.`,
		code: `<script type="text/javascript" id="gtm-vimeo-tracking">
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
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Vimeo Video Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>User interactions with your embedded Vimeo video can be tracked using this event listener, which makes the process of setting this up in your Google Tag Manager easy.</p>
<p>First, you’ll have to create a custom HTML tag, where the event listener script will be added. Attach a trigger to your tag to have it fire on DOM-ready.</p>
<p>The Vimeo event listener script emits different events based on the type of interaction (play, pause, and Watch to End)</p>
<p>Create the following variables;</p>
<p>videoAction –&gt;&gt; tells the video progress percentage</p>
<p>videoName –&gt;&gt;&nbsp; returns the video name</p>
<p>This is a Vimeo tracking script for tracking video interactions in your analytics stack.</p>
<p>&nbsp;</p>
<p>Credit</p>
<p><strong>The creator of this code is&nbsp;<a href="https://www.bounteous.com/insights/2017/04/07/vimeo-tracking-gtm/" target="_blank" rel="noopener">Bounteous</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'vimeo',
		logoPath: '/logos/vimeo.jpg'
	}, {
		title: 'Wistia',
		listDescription: `Measure user engagement with your embedded Wistia videos using this event listener and GTM.`,
		code: `<script type="text/javascript" id="gtm-wistia-tracking">
; (function(document, window, config) {

'use strict';

config = cleanConfig(config);

var _wq = window._wq = window._wq || [];
var handle = getHandler(config.syntax);
var f, s;

_wq.push({
id: '_all',
onReady: listenTo
});

if (isUndefined_(window.Wistia)) {

f = document.getElementsByTagName('script')[0];
s = document.createElement('script');
s.src = '//fast.wistia.net/assets/external/E-v1.js';
s.async = true;

f.parentNode.insertBefore(s, f);

}

function listenTo(video) {

var percentages = config._track.percentages;
var eventNameDict = {
'Played video': 'play',
'Paused video': 'pause',
'100%': 'end'
};
var cache = {};

forEach_(['Played video', '100%'], function(key) {

if (config.events[key]) {

video.bind(eventNameDict[key], function() {

handle(key, video);

});

}

});

if (config.events.Pause) {

video.bind('pause', function() {

if (video.percentWatched() !== 1) handle('Paused video', video);

});

}

if (percentages) {

video.bind('secondchange', function(s) {

var percentage = video.percentWatched();
var key;

for (key in percentages) {

if (percentage >= percentages[key] && !cache[key]) {

cache[key] = true;
handle(key, video);

}

}

});

}

}

function cleanConfig(config) {

config = extend_({}, {
events: {
'Played video': true,
'Paused video': true,
'100%': true
},
percentages: {
each: [],
every: []
}
}, config);

var key;
var vals;

forEach_(['each', 'every'], function(setting) {

var vals = config.percentages[setting];

if (!isArray_(vals)) vals = [vals];

if (vals) config.percentages[setting] = map_(vals, Number);

});

var points = [].concat(config.percentages.each);

if (config.percentages.every) {

forEach_(config.percentages.every, function(val) {

var n = 100 / val;
var every = [];
var i;

for (i = 1; i < n; i++) every.push(val * i);

points = points.concat(filter_(every, function(val) {

return val > 0.0 && val < 100.0;

}));

});

}

var percentages = reduce_(points, function(prev, curr) {

prev[curr + '%'] = curr / 100.0;
return prev;

}, {});

config._track = {
percentages: percentages
};

return config;

}

function getHandler(syntax) {

syntax = syntax || {};

var gtmGlobal = syntax.name || 'dataLayer';
var uaGlobal = syntax.name || window.GoogleAnalyticsObject || 'ga';
var clGlobal = '_gaq';
var dataLayer;

var handlers = {
'gtm': function(state, video) {


dataLayer.push({
event: 'video',
videoProvider: 'Wistia',
videoAction: state,
videoLabel: video.name(),
videoHashedID: video.hashedId(),
videoURL: document.location.origin + document.location.pathname + '?' + video.hashedId()
});

},
'cl': function(state, video) {

window[clGlobal].push(['_trackEvent', 'Videos', state, video.name()]);

},
'ua': function(state, video) {

window[uaGlobal]('send', 'event', 'Videos', state, video.name());

}
};

switch(syntax.type) {

case 'gtm':

dataLayer = window[gtmGlobal] = window[gtmGlobal] || [];
break;

case 'ua':

window[uaGlobal] = window[uaGlobal] || function() {

(window[uaGlobal].q = window[uaGlobal].q || []).push(arguments);

};
window[uaGlobal].l = +new Date();
break;

case 'cl':

window[clGlobal] = window[clGlobal] || [];
break;

default:

if (!isUndefined_(window[gtmGlobal])) {

syntax.type = 'gtm';
dataLayer = window[gtmGlobal] = window[gtmGlobal] || [];

} else if (uaGlobal&& !isUndefined_(window[uaGlobal])) {

syntax.type = 'ua';

} else if (!isUndefined_(window[clGlobal]) && !isUndefined_(window[clGlobal].push)) {

syntax.type = 'cl';

}
break;
}

return handlers[syntax.type];

}

function extend_() {

var args = [].slice.call(arguments);
var dst = args.shift();
var src;
var key;
var i;

for (i = 0; i < args.length; i++) {

src = args[i];

for (key in src) {

dst[key] = src[key];

}

}

return dst;

}

function isArray_(o) {

if (Array.isArray_) return Array.isArray_(o);

return Object.prototype.toString.call(o) === '[object Array]';

}

function forEach_(arr, fn) {

if (Array.prototype.forEach_) return arr.forEach.call(arr, fn);

var i;

for (i = 0; i < arr.length; i++) {

fn.call(window, arr[i], i, arr);

}

}

function map_(arr, fn) {

if (Array.prototype.map_) return arr.map.call(arr, fn);

var newArr = [];

forEach_(arr, function(el, ind, arr) {

newArr.push(fn.call(window, el, ind, arr));

});

return newArr;

}


function filter_(arr, fn) {

if (Array.prototype.filter) return arr.filter.call(arr, fn);

var newArr = [];

forEach_(arr, function(el, ind, arr) {

if (fn.call(window, el, ind, arr)) newArr.push(el);

});

return newArr;

}

function reduce_(arr, fn, init) {

if (Array.prototype.reduce) return arr.reduce.call(arr, fn, init);

var result = init;
var el;
var i;

for (i = 0; i < arr.length; i++) {

el = arr[i];
result = fn.call(window, result, el, arr, i);

}

return result;

}

function isUndefined_(thing) {

return typeof thing === 'undefined';

}

})(document, window, {
'events': {
'Played video': true,
'Paused video': true,
'100%': true
},
'percentages': {
'every': 25,
'each': [0, 10, 90]
}
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Wistia Video Engagements with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you have a Wistia video embedded on your website, you can measure how users consume your video content.</span></p>
<p><span data-preserver-spaces="true">Use the data to build a marketing audience, segmentation analysis on how the video engagement impacts your conversions, website engagement metrics, marketing funnel, and other KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement this, start by creating a new custom HTML tag type in Google Tag Manager, copy and paste the Wistia event listener code in this tag, fire it on DOM Ready or Window loaded (Recommended)</span></p>
<p><span data-preserver-spaces="true">What this code does is listen for Wistia video activities such as;</span></p>
<ol>
<li><span data-preserver-spaces="true">Play and Pause</span></li>
<li><span data-preserver-spaces="true">Video Progress (0, 10, 25, 50, 75, 90, 100) percent</span></li>
</ol>
<p><span data-preserver-spaces="true">To fire your tags when this event happens, you can create a custom event trigger with the name&nbsp;</span></p>

<p><span data-preserver-spaces="true">🚨 This event&nbsp;</span></p>

<p><strong><span data-preserver-spaces="true">&nbsp;</span></strong><span data-preserver-spaces="true">gets fired for all Wistia video interactions.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Using Google Tag Manager dataLayer variables, you can get more data about the Wistia video, which includes;</span></p>
<p><strong><span data-preserver-spaces="true">[videoProvider]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the Wistia all time</span></p>
<p><strong><span data-preserver-spaces="true">[videoAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the video actions, pause play, percent, etc.</span></p>
<p><strong><span data-preserver-spaces="true">[videoLabel]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; gets the video name</span></p>
<p><strong><span data-preserver-spaces="true">[videoHashedID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; gets the Wistia video ID</span></p>
<p><strong><span data-preserver-spaces="true">[videoURL]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; this is the video URL</span></p>
<p><span data-preserver-spaces="true">To have these data available in your analytics tool or advertising platform, you’ll have to create the needed tag and attach the Wistia video trigger.</span></p>
<p><span data-preserver-spaces="true">💡 You can streamline the event to fire on specific Wistia interactions by using the dataLayer variables and trigger conditions</span></p>
<p><span data-preserver-spaces="true">You can customize the event listener to fire on a specific percentage and what interval you want by either watching the demonstration in the video or following the steps;</span></p>
<p><span data-preserver-spaces="true">at the bottom of the Wistia video event listener javascript code, you should see a code like this;</span></p>
<blockquote><p><span data-preserver-spaces="true">‘every’: 25,</span></p>
<p><span data-preserver-spaces="true">‘each’: [0, 10, 90]</span></p>
<p><span data-preserver-spaces="true">}</span></p>
<p><span data-preserver-spaces="true">});</span></p>
<p><span data-preserver-spaces="true">&lt;/script&gt;</span></p></blockquote>
<p><span data-preserver-spaces="true">‘every’: 25 means it should happen every 25%,&nbsp;</span></p>
<p><span data-preserver-spaces="true">while the ‘each’: [0, 10, 90] meaning it should also fire on 0% (meaning the video just started), 10% and 90% video progress</span></p>
<p><span data-preserver-spaces="true">To customize this, change the value to your needs and the Wistia video progress events are triggered based on your customizations.</span></p>
<p><span data-preserver-spaces="true">🏆CREDIT:&nbsp;</span></p>
<p><strong><a href="http://www.lunametrics.com/labs/recipes/wistia-video-tracking-for-gtm/">Bounteous (Formely LunaMetrics)</a> created the script, all we did was customize the progress, including the Wistia video ID and video URL variable to the dataLayer.</strong></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'wistia',
		logoPath: '/logos/wistia.jpg'
	}, {
		title: 'vidyard',
		listDescription: `If you have a Vidyard video embedded on your landing page, use the event listener to measure user engagement.`,
		code: `<script type="text/javascript">
function initApp() {
vidyardEmbed.api.addReadyListener(function(data, player) {
vidyardEmbed.api.progressEvents(function(result) {
if (result.event == 1) {
dataLayer.push({
event: 'vidyardInteraction',
ContentCategory: 'video',
videoProvider: 'Vidyard',
videoAction: "Play",
videoID: result.player.uuid,
videoURL: 'https://share.vidyard.com/watch/' + result.player.uuid,
vidyardVisitorID: result.player.metadata.visitorID,
videoDuration: result.player.metadata.length_in_seconds,
videoLabel: result.player.metadata.chapters_attributes[result.chapter].video_attributes.name
});
} else {
dataLayer.push({
event: 'vidyardInteraction',
ContentCategory: 'video',
videoProvider: 'Vidyard',
videoAction: "Watched " + result.event + "%",
videoID: result.player.uuid,
videoURL: 'https://share.vidyard.com/watch/' + result.player.uuid,
vidyardVisitorID: result.player.metadata.visitorID,
videoDuration: result.player.metadata.length_in_seconds,
videoLabel: result.player.metadata.chapters_attributes[result.chapter].video_attributes.name
});
}
}, [1, 25, 50, 75, 95, 100]);
});
}

window.vidyardEmbed ?
initApp(window.vidyardEmbed) :
(window.onVidyardAPI = function(vyApi) { initApp(vyApi); });
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Vidyard Video Interaction with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">If you have a Vidyard video embedded on your website, you can measure how users consume your video content.</span></p>
<p><span data-preserver-spaces="true">Use the data to build a marketing audience, segmentation analysis on how the video engagement impacts your conversions, website engagement metrics, marketing funnel, and other KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement this, start by creating a new custom HTML tag type in Google Tag Manager, copy and paste the Vidyard event listener code in this tag, fire it on DOM Ready or Window loaded (Recommended)</span></p>
<p><span data-preserver-spaces="true">What this code does is listen for Vidyard video activities such as;</span></p>
<ol>
<li><span data-preserver-spaces="true">Play</span></li>
<li><span data-preserver-spaces="true">Video Progress (1, 10, 25, 50, 75, 90, 100) percent</span></li>
</ol>
<p><span data-preserver-spaces="true">To fire your tags when this event happens, you can create a custom event trigger with the name&nbsp;</span><strong><span data-preserver-spaces="true">[vidyardInteraction]</span></strong></p>
<p><span data-preserver-spaces="true">🚨 This event&nbsp;</span><strong><span data-preserver-spaces="true">[vidyardInteraction]&nbsp;</span></strong><span data-preserver-spaces="true">gets fired for all Vidyard video interactions.&nbsp;</span></p>
<p><span data-preserver-spaces="true">Using Google Tag Manager dataLayer variables, you can get more data about the Vidyard video, which includes;</span></p>
<p><strong><span data-preserver-spaces="true">[videoProvider]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the Vidyard all time (The video provider)</span></p>
<p><strong><span data-preserver-spaces="true">[videoAction]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the video actions, pause play, percent, etc.</span></p>
<p><strong><span data-preserver-spaces="true">[videoLabel]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; gets the video name/title</span></p>
<p><strong><span data-preserver-spaces="true">[videoID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; gets the Vidyard video ID</span></p>
<p><strong><span data-preserver-spaces="true">[videoURL]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; this is the Vidyard video URL</span></p>
<p><strong><span data-preserver-spaces="true">[videoDuration]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; returns the Vidyard video duration in seconds</span></p>
<p><strong><span data-preserver-spaces="true">[vidyardVisitorID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; this returns the Vidyard visitor ID</span></p>
<p><span data-preserver-spaces="true">To have these data available in your analytics tool or advertising platform, you’ll have to create the needed tag and attach the Vidyard video trigger.</span></p>
<p><span data-preserver-spaces="true">💡 You can streamline the event to fire on specific Vidyard interactions by using the dataLayer variables and trigger conditions</span></p>
<p>&nbsp;</p>
<p><strong>🏆 Credit: Code was originally created by the <a href="https://knowledge.vidyard.com/hc/en-us/articles/360010001653-Track-video-views-with-Google-Tag-Manager" target="_blank" rel="noopener">Vidyard team</a>, but modified to include certain information</strong></p>
								</div>
				</div>
					</div>`,
		slug: 'vidyard',
		logoPath: '/logos/vidyard.jpg'
	}
];

export const listenerCardsPopup: ListenerCardProps[] = [
	{
		title: 'Poptin Popup',
		listDescription: `Capture user interactions with poptin pop ups and use the data to trigger your desired marketing pixels/tags`,
		code: `<script>
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
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  poptin interactions &amp; conversions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>To seamlessly measure user interaction and conversions of Poptin pop-ups on your website.</p>
<p>Start by creating a new custom HTML tag type in Google Tag Manager, copy the event listener and paste it there, set it to fire on pageview or DOM ready.</p>
<p>Proceed to variables to create new dataLayer variables for <strong>[poptinID]</strong> returns the Poptin pop-up ID, and the <strong>[popupAction]</strong> variable (returns the Poptin event that occurred, these can be pop up visibility, pop up close and form submissions).</p>
<p>After the creation of these variables, proceed to create your trigger. You can either create a single custom event trigger <strong>[poptinPopUpEvent]</strong> for all Poptin Popup events or create specific triggers and use conditions to streamline when it should fire the tag with the help of the <strong>[popupAction]</strong> variables.</p>
<p>You can now connect your marketing pixels/ tags to this trigger and use the data to make better marketing decisions about your Poptin Pop-up conversion funnel.</p>
								</div>
				</div>
					</div>`,
		slug: 'poptin-popup',
		logoPath: '/logos/poptin.jpg'
	}, {
		title: 'Optin Monster',
		listDescription: `With this event listener, you can easily measure your Optin Monster pop-ups interactions and conversions using GTM.`,
		code: `<script>
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
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Optin Monster Pop Up Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>Measuring your Optinmonster pop-ups funnel and its performance in analytics tools such as Google Analytics (Universal &amp; GA4), Mixpanel, PiwikPro, Fullstory, etc. Is easy and possible using Google Tag Manager.</p>
<p>And if you’re using advertising platforms like Google Ads, Facebook Ads, Microsoft Ads, Pinterest, etc. You can also measure conversions of these pop-ups using this Optinmonster event listener and Google Tag Manager.</p>
<p>To start the implementation in GTM, create a custom HTML tag that you’ll be adding this event listener script to, give the tag a name and trigger it on pageview or DOM ready.</p>
<p>This script will listen for Optinmonster pop-ups activity (impression, conversion, closing a pop-up and errors) and push the event and its attributes to the dataLayer.</p>
<p>The next step is to setup dataLayer variables, which gives you more insights about the event, these includes;<br>
<strong>[campaignID]</strong> –&gt; gives the ID of the Optinmonster pop-up campaign<br>
<strong>[campaignName]</strong> –&gt; this is the campaign name<br>
<strong>[campaignDetail]</strong> –&gt; returns campaign type, popup type.</p>
<p>There are 4 Optinmonster events triggered by this listener<br>
<strong>[optinmonsterimpression]</strong> –&gt; triggers when a pop-up is displayed<br>
<strong>[optinmonsterconversion]</strong> –&gt; for when a user converts<br>
<strong>[optinmonsterCampaignClose]</strong> –&gt; when a pop-up is closed<br>
<strong>[optinmonsterError]</strong> –&gt; when an error is experienced while converting</p>
<p>To trigger your marketing pixels/tags when these events happen, create a custom event for each of these events connect your GTM tag to the appropriate trigger.</p>
								</div>
				</div>
					</div>`,
		slug: 'optin-monster',
		logoPath: '/logos/optin-monster.jpg'
	}, {
		title: 'ConvertFlow',
		listDescription: `Measure certain user interactions (form submission, pop-up view, interaction, etc.) in Convertflow.`,
		code: `<script>
//Fires only when CTA form and survey elements have been submitted.
window.addEventListener("cfSubmit", function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'ConvertFlow_Form_Submitted',
'formfield': event.detail.fields,
'eventData': event.detail,
'userDemography': convertflow.person.data.properties,
'userID': convertflow.person.id,
'userTrafficSource': convertflow.person.referral_source,
'userLandingPage': convertflow.person.landing_page
});
});
//Fires when a CTA has been viewed and upon reaching each additional step.
window.addEventListener("cfView", function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'ConvertFlow_Campaign_Impression',
'eventData': event.detail,
'userDemography': convertflow.person.data.properties,
'userID': convertflow.person.id,
'userTrafficSource': convertflow.person.referral_source,
'userLandingPage': convertflow.person.landing_page
});
});
//
//Fires when a CTA has been viewed and upon reaching each additional step.
window.addEventListener("cfClose", function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'ConvertFlow_Campaign_Dismissed',
'formfield': event.detail.fields,
'eventData': event.detail,
'userDemography': convertflow.person.data.properties,
'userID': convertflow.person.id,
'userTrafficSource': convertflow.person.referral_source,
'userLandingPage': convertflow.person.landing_page
});
});
//Fires when the CTA has been tracked as completed by the "Track completion of CTA" automation
window.addEventListener("cfCompletion", function(event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'ConvertFlow_Campaign_Completed',
'formfield': event.detail.fields,
'eventData': event.detail,
'userDemography': convertflow.person.data.properties,
'userID': convertflow.person.id,
'userTrafficSource': convertflow.person.referral_source,
'userLandingPage': convertflow.person.landing_page
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Convertflow Interactions &amp; Conversions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measuring user interactions and conversions with your Convertflow lead generation campaign gives you valuable insights into the impact these campaign conversions have on your marketing funnel, conversions, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement the Convertflow campaign interaction and conversion tracking, you’ll need Google Tag Manager and the Convertflow event listener javascript code.</span></p>
<p><span data-preserver-spaces="true">To begin, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">💡</span><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Convertflow script through Google Tag Manager, please use the DOM ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">What the Convertflow event listener does, is fire an event on every user interaction and conversion of a Convertflow campaign.</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the following event names for the specific events;</span></p>
<p><strong><span data-preserver-spaces="true">[ConvertFlow_Form_Submitted]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Fires only when CTA form and survey elements have been submitted.</span></p>
<p><strong><span data-preserver-spaces="true">[ConvertFlow_Campaign_Impression]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Fires when a CTA has been viewed and upon reaching each additional step.</span></p>
<p><strong><span data-preserver-spaces="true">[ConvertFlow_Campaign_Dismissed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Fires on dismissal of a Convertflow campaign</span></p>
<p><strong><span data-preserver-spaces="true">[ConvertFlow_Campaign_Completed]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Fires when the CTA has been tracked as completed by the “Track completion of CTA” automation</span></p>
<p><span data-preserver-spaces="true">You can enrich your event data, by creating dataLayer variables in Google Tag Manager, which captures useful information about the event, some of the dataLayer variables keys are;</span></p>
<p><strong><span data-preserver-spaces="true">[userID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Convertflow user ID</span></p>
<p><strong><span data-preserver-spaces="true">[userTrafficSource]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user traffic source</span></p>
<p><strong><span data-preserver-spaces="true">[userLandingPage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user landing page</span></p>
<p><strong><span data-preserver-spaces="true">[userDemography]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Object data of the user demography (City, country, state)</span></p>
<p><strong><span data-preserver-spaces="true">[formfield]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; The form fields data (user inputs)</span></p>
<p><strong><span data-preserver-spaces="true">[eventData]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Object data of each event</span></p>
<p><span data-preserver-spaces="true">After creating the dataLayer variables, create your marketing tag/pixels, add the appropriate trigger and the event parameters you need for analysis.</span></p>
<p><span data-preserver-spaces="true">Once done, debug to ensure it’s working fine, and publish once everything is okay.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'convertflow',
		logoPath: '/logos/convertflow.jpg'
	}, {
		title: 'Wisepops',
		listDescription: `Measure user interactions and conversions of your Wisepops pop-up using this event listener.`,
		code: `<script>
//The after-form-submit event is fired after the submission of a signup block form
wisepops('listen', 'after-form-submit', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'wisepopsEvent',
'wisepopupAction': 'popup form submitted',
'wisepopsdetails': event.target,
'wisepopsID': event.detail.popup.id,
'eventType': event.type,
'userLanguage': navigator.language,
'userOS': navigator.userAgentData.platform,
'userBrowser': navigator.userAgentData.brands[2].brand,
'pageTitle': document.title
});
});
//The after-popup-close event is fired after the popup has been closed
wisepops('listen', 'after-popup-close', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'wisepopsEvent',
'wisepopupAction': 'popup closed',
'wisepopsdetails': event.target,
'wisepopsID': event.detail.popup.id,
'eventType': event.type,
'userLanguage': navigator.language,
'userOS': navigator.userAgentData.platform,
'userBrowser': navigator.userAgentData.brands[2].brand,
'pageTitle': document.title
});
});
//The before-popup-display event is fired before the display of a popup.
wisepops('listen', 'before-popup-display', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'wisepopsEvent',
'wisepopupAction': 'popup displayed',
'wisepopsdetails': event.target,
'wisepopsID': event.detail.popup.id,
'eventType': event.type,
'userLanguage': navigator.language,
'userOS': navigator.userAgentData.platform,
'userBrowser': navigator.userAgentData.brands[2].brand,
'pageTitle': document.title
});
});
//The before-tab-display event is fired before the display of a tab.
wisepops('listen', 'before-tab-display', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'wisepopsEvent',
'wisepopupAction': 'tab displayed',
'wisepopsdetails': event.target,
'wisepopsID': event.detail.popup.id,
'eventType': event.type,
'userLanguage': navigator.language,
'userOS': navigator.userAgentData.platform,
'userBrowser': navigator.userAgentData.brands[2].brand,
'pageTitle': document.title
});
});
//The after-tracked-click event is fired after the conversion of a popup.
wisepops('listen', 'after-tracked-click', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'wisepopsEvent',
'wisepopupAction': 'interact with the popup',
'wisepopsdetails': event.target,
'wisepopsID': event.detail.popup.id,
'eventType': event.type,
'userLanguage': navigator.language,
'userOS': navigator.userAgentData.platform,
'userBrowser': navigator.userAgentData.brands[2].brand,
'pageTitle': document.title
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Wisepops Popups with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Measuring Wisepops popup conversions in your measurement stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) will help enrich your marketing data.</span></p>
<p><span data-preserver-spaces="true">With this data you can have valuable insights on how Wisepops interactions impact your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">For this implementation, we’ll use Google Tag Manager and the Wisepops event listener script.</span></p>
<p><span data-preserver-spaces="true">Start by pasting the event listener script in the GTM custom HTML tag and firing it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true">&nbsp;if you installed the Wisepops script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[wisepopsEvent]</span></strong><span data-preserver-spaces="true">, which happens on all Wisepops activity.</span></p>
<p><span data-preserver-spaces="true">Create a DataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[wisepopupAction]</span></strong><span data-preserver-spaces="true">&nbsp;as it will help you capture in GTM the Wisepops popup interaction type.</span></p>
<p><strong><span data-preserver-spaces="true">[wisepopupAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li><span data-preserver-spaces="true">popup form submitted</span></li>
<li><span data-preserver-spaces="true">popup closed</span></li>
<li><span data-preserver-spaces="true">popup displayed</span></li>
<li><span data-preserver-spaces="true">tab displayed</span></li>
<li><span data-preserver-spaces="true">interact with the popup</span></li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[wisepopupAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific Wispops interactions.</span></p>
<p><span data-preserver-spaces="true">to get more data about each Wisepops event, create a dataLayer variables with the name;</span></p>
<p><strong><span data-preserver-spaces="true">[wisepopsdetails]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the popup HTML</span></p>
<p><strong><span data-preserver-spaces="true">[wisepopsID]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the Wisepops pop-up ID</span></p>
<p><strong><span data-preserver-spaces="true">[userLanguage]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the the user browser language</span></p>
<p><strong><span data-preserver-spaces="true">[userOS]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user browser operating system.</span></p>
<p><strong><span data-preserver-spaces="true">[userBrowser]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the user browser name.</span></p>
<p><strong><span data-preserver-spaces="true">[pageTitle]</span></strong><span data-preserver-spaces="true">&nbsp;–&gt; Returns the page title</span></p>
<p><span data-preserver-spaces="true">The last step will be connecting your marketing tags to the trigger and use the dataLayer variables you created to push more information about each interaction.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'wisepops',
		logoPath: '/logos/wisepops.jpg'
	}, {
		title: 'GetSiteControl',
		listDescription: `Measure user interactions/conversions of your GetSiteControl popups on your website using this event listener.`,
		code: `<script>
gsc('onShow', function(widgetId, data) {
window.dataLayer.push({ 
'event': 'GSC_Impression', 
'widgetId': widgetId
});
});
gsc('onClose', function(widgetId, data) {
window.dataLayer.push({ 
'event': 'GSC_Close', 
'widgetId': widgetId
});
});
gsc('onSubmit', function(widgetId, data) {
window.dataLayer.push({ 
'event': 'getSiteControlConv', 
'widgetId': widgetId, 
'formData': data 
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  GetSiteControl Pop Up Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Enhance the data in your measurement stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) with GetSiteControl pop-up impressions, closes, and conversion data.</span></p>
<p><span data-preserver-spaces="true">With this data, you can have valuable insights into what impact these interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">Google Tag Manager, and the GetSiteControl event listener script, will be needed for this implementation.</span></p>
<p><span data-preserver-spaces="true">Your first step will be to copy, and paste the event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the GetSiteControl script through Google Tag Manager, please use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating the following list of custom events;</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[GSC_Impression] -&gt;</span></strong><span data-preserver-spaces="true">which happens on a GetSiteControl pop-up is displayed.</span></li>
<li><strong><span data-preserver-spaces="true">[GSC_Close] -&gt;</span></strong><span data-preserver-spaces="true">which fires when the user closes a GetSiteControl pop-up widget.</span></li>
<li><strong><span data-preserver-spaces="true">[getSiteControlConv] -&gt;</span></strong><span data-preserver-spaces="true">which happens when a lead is generated through the widget.</span></li>
</ul>
<p><span data-preserver-spaces="true">You’ll need to create a DataLayer variable with the key </span><strong><span data-preserver-spaces="true">[widgetId], </span></strong><span data-preserver-spaces="true">this variable pull the widget ID that helps us identify the widget that is emitting that event</span><span data-preserver-spaces="true">.</span></p>
<p>Connect your marketing tags to the trigger and use the dataLayer variables you created to push more information about each GetSiteControl widget interaction.</p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'getsitecontrol',
		logoPath: '/logos/getsitecontrol.jpg'
	}, {
		title: 'Elementor Popup',
		listDescription: `Track Elementor popup conversions and trigger your marketing tags/pixels on the actions.`,
		code: `<script>
jQuery(document).on('elementor/popup/show', function(Event, popupId) { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': "show_Popup",
'popupID': popupId
});
});
jQuery(document).on('elementor/popup/hide', function(Event, popupId) { 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': "close_Popup",
'popupID': popupId
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Elementor Popup Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">To track Interactions with Elementor popups in Google Tag Manager, you’ll have to copy the event listener code, paste it into your custom HTML tag in GTM, and trigger it on DOM ready.</span></p>
<p><span data-preserver-spaces="true">When a popup is shown, the code pushes a dataLayer event with the event name “show_Popup” and the ID of the popup that was shown.</span></p>
<p><span data-preserver-spaces="true">Similarly, when a popup is hidden, the code pushes another dataLayer event with the event name “close_Popup” and the hidden popup ID.</span></p>
<p><span data-preserver-spaces="true">You’ll have to create two custom event triggers and one dataLayer variable;</span></p>
<p><span data-preserver-spaces="true">The trigger&nbsp;</span><strong><span data-preserver-spaces="true">[show_Popup]</span></strong><span data-preserver-spaces="true">&nbsp;is emitted when a popup is shown to a user, and&nbsp;</span><strong><span data-preserver-spaces="true">[close_Popup]</span></strong><span data-preserver-spaces="true">&nbsp;happens when the user closes the popup.</span></p>
<p><span data-preserver-spaces="true">To get the Elementor Popup ID, create the dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[popupID]</span></strong><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">When the event happens, you can fire your tags/pixels (Google Analytics (GA4), Piwik Pro, etc.).</span></p>
								</div>
				</div>
					</div>`,
		slug: 'elementor-popup',
		logoPath: '/logos/elementor.jpg'
	}
];

export const listenerCardsOther: ListenerCardProps[] = [
	{
		title: 'Disqus',
		listDescription: `Enhance your data by using this event listener to track user interactions with your Disqus comment widget.`,
		code: `<script>
var disqus_config = function () {
this.page.url = '{{Page URL}}'; // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = '0123456789'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
this.callbacks.onNewComment = [function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'disqus_comment'
});
}];
};
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Disqus Interaction with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>You can measure when users leave a comment in your Disqus comment section and have the data pushed to your analytics tools (Google Analytics, Piwik Pro, Heap, Mixpanel, etc.), using Google Tag Manager and the Disqus event listener.</p>
<p>To implement this copy the Disqus event listener code, create a new custom HTML tag in Google Tag Manager, paste the code here and apply these customizations;</p>
<blockquote><p>// this.page.url = ‘{{Page URL}}’; // Replace PAGE_URL with your page’s canonical URL variable</p></blockquote>
<p>change <strong>{{Page URL}}</strong> to the canonical page URL</p>
<blockquote><p>this.page.identifier = ‘0123456789’; // Replace PAGE_IDENTIFIER with your page’s unique identifier variable</p></blockquote>
<p>change ‘<strong>0123456789</strong>‘ to the page identifier</p>
<p>Save your tag and fire on DOM or Window Loaded (Recommended)</p>
<p><strong>The creator of the code is Isaac Abramowitz and can be found <a href="https://iabramo.com/2015/10/29/track-disqus-comments-using-google-tag-manager/" target="_blank" rel="noopener">here</a></strong></p>
								</div>
				</div>
					</div>`,
		slug: 'disqus',
		logoPath: '/logos/disqus.jpg'
	}, {
		title: 'Zoho Sales IQ',
		listDescription: `Get a better understanding of how users interact with the Zoho Sales IQ widget embedded on your website.`,
		code: `<script>
// Listen for the chat button click event
$zoho.salesiq.chatbutton.click(function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "chatbutton_click"
});
});

// Listen for the float button click event
$zoho.salesiq.floatbutton.click(function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "floatbutton_click"
});
});

// Listen for the float window minimize event
$zoho.salesiq.floatwindow.minimize(function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "floatwindow_minimize"
});
});

// Listen for the float window close event
$zoho.salesiq.floatwindow.close(function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "floatwindow_close"
});
});

// Listen for the visitor chat initiation event
$zoho.salesiq.visitor.chat(function(visitid, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "visitor_chat",
visitid: visitid,
visitorName: data.name,
visitorEmail: data.email,
visitorQuestion: data.question
});
});

// Listen for the agent message event
$zoho.salesiq.chat.agentMessage(function(visitid, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "agent_message",
visitid: visitid,
agentMessage: data.message
});
});

// Listen for the visitor feedback event
$zoho.salesiq.visitor.feedback(function(visitid, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "visitor_feedback",
visitid: visitid,
feedback: data.feedback,
agent: data.agent
});
});

// Listen for the visitor rating event
$zoho.salesiq.visitor.rating(function(visitid, data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: "zoho_sales_IQ_event",
action: "visitor_rating",
visitid: visitid,
agent: data.agent,
rating: data.rating
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Zoho Sales IQ Chat Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">The <a href="https://www.zoho.com/salesiq/" target="_blank" rel="noopener">Zoho Sales IQ </a></span><span data-preserver-spaces="true">chat event listener</span><span data-preserver-spaces="true"> provided on this resource page can be used in Tag Managers like Google Tag Manager, Piwik Pro Tag Manager, and others to track website visitor interactions with the Zoho Sales IQ chat widget embedded on your website.</span></p>
<p><span data-preserver-spaces="true">Here’s how you can set it up:</span></p>
<p><strong><span data-preserver-spaces="true">1. Create a Custom HTML Tag:</span></strong></p>
<ul>
<li><span data-preserver-spaces="true">Create a new custom HTML tag in Google Tag Manager (GTM).</span></li>
<li><span data-preserver-spaces="true">Copy and paste the Zoho Sales IQ chat event listener script into this tag.</span></li>
<li><span data-preserver-spaces="true">Add a trigger to the tag. </span><span data-preserver-spaces="true">It’s recommended</span><span data-preserver-spaces="true"> to use</span><span data-preserver-spaces="true"> a DOM Ready trigger, ensuring the trigger fires only after the Zoho Sales IQ chat widget has fully loaded on your website.</span></li>
<li><span data-preserver-spaces="true">Name the tag and save it.</span></li>
</ul>
<p><span data-preserver-spaces="true">The Zoho Sales IQ </span><span data-preserver-spaces="true">chat event listener</span><span data-preserver-spaces="true"> emits dataLayer events named “</span><strong><span data-preserver-spaces="true">[zoho_sales_IQ_event]</span></strong><span data-preserver-spaces="true">” for every chat widget interaction it tracks. You’ll use this in the </span><span data-preserver-spaces="true">next</span><span data-preserver-spaces="true"> steps.</span></p>
<p><strong><span data-preserver-spaces="true">2. Create a Custom Event Trigger:</span></strong></p>
<ul>
<li><span data-preserver-spaces="true">Next, create a custom event trigger in GTM.</span></li>
<li><span data-preserver-spaces="true">Use “</span><strong><span data-preserver-spaces="true">[zoho_sales_IQ_event]</span></strong><span data-preserver-spaces="true">“</span> <span data-preserver-spaces="true"> as the event name in the trigger configuration.</span></li>
<li><span data-preserver-spaces="true">Name the trigger and save it for later use.</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">3. Define DataLayer Variables:</span></strong></p>
<ul>
<li><span data-preserver-spaces="true">To determine the specific type of interaction with the Zoho Sales IQ chat widget, create dataLayer variables.</span></li>
<li><span data-preserver-spaces="true">The first variable should be </span><span data-preserver-spaces="true">of</span><span data-preserver-spaces="true"> the dataLayer variable type with the key “</span><strong><span data-preserver-spaces="true">[action]</span></strong><span data-preserver-spaces="true">“. This variable will return different values depending on the </span><span data-preserver-spaces="true">type</span><span data-preserver-spaces="true"> of chat widget engagement, such as:</span>
<ul>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">chatbutton_click</span></strong><span data-preserver-spaces="true">“: When the Zoho Sales IQ chat widget </span><span data-preserver-spaces="true">is clicked</span><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">floatbutton_click</span></strong><span data-preserver-spaces="true">“: When the float button </span><span data-preserver-spaces="true">is clicked</span><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">floatwindow_minimize</span></strong><span data-preserver-spaces="true">“: When the chat window </span><span data-preserver-spaces="true">is minimized</span><span data-preserver-spaces="true">.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">floatwindow_close</span></strong><span data-preserver-spaces="true">“: When the chat float is closed.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">visitor_chat</span></strong><span data-preserver-spaces="true">“: When a visitor initiates a chat.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">agent_message</span></strong><span data-preserver-spaces="true">“: When a chat agent sends a message.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">visitor_feedback</span></strong><span data-preserver-spaces="true">“: When </span><span data-preserver-spaces="true">a visitor leaves</span><span data-preserver-spaces="true"> feedback about their chat experience.</span></li>
<li><span data-preserver-spaces="true">“</span><strong><span data-preserver-spaces="true">visitor_rating</span></strong><span data-preserver-spaces="true">“: When a visitor rates their chat experience.</span></li>
</ul>
</li>
</ul>
<p><strong><span data-preserver-spaces="true">4. Additional DataLayer Variables:</span></strong></p>
<p><span data-preserver-spaces="true">These other dataLayer variables are not available on all the Zoho Sales IQ chat dataLayer events; creating them and capturing them in their associated event will help you add additional dataLayer variables for more context:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">[visitid]</span></strong><span data-preserver-spaces="true">: The visitor ID.</span></li>
<li><strong><span data-preserver-spaces="true">[agentMessage]</span></strong><span data-preserver-spaces="true">: The chat agent’s message.</span></li>
<li><strong><span data-preserver-spaces="true">[feedback]</span></strong><span data-preserver-spaces="true">: Feedback provided by the user.</span></li>
<li><strong><span data-preserver-spaces="true">[agent]</span></strong><span data-preserver-spaces="true">: The agent’s name.</span></li>
<li><strong><span data-preserver-spaces="true">[rating]</span></strong><span data-preserver-spaces="true">: The chat rating.</span></li>
</ul>
<p><strong><span data-preserver-spaces="true">5. Collect Interaction Data In Analytics:</span></strong></p>
<p><span data-preserver-spaces="true">Create a new tag for your <a href="https://marketingplatform.google.com/about/analytics/" target="_blank" rel="noopener">GA4</a> event tag or <a href="https://piwik.pro/" target="_blank" rel="noopener">Piwik Pro</a> custom event tag, and use the Zoho Sales IQ events to fire the analytics tag and the dataLayer variables to enrich the Zoho Sales IQ chat interactions event in analytics tools like Google Analytics (GA4), Piwik Pro, etc.</span></p>
<p><span data-preserver-spaces="true">To simplify and speed up the implementation process, scroll down this resource page to find a Google Tag Manager recipe template </span><span data-preserver-spaces="true">that you</span><span data-preserver-spaces="true"> can download and use.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'zoho-sales-iq',
		logoPath: '/logos/zoho.jpg'
	}, {
		title: 'OnSched',
		listDescription: `Measure website visitors' appointment flow and scheduling on OnSched for better insights.`,
		code: `<script>
(function() {
// Helper function to push dataLayer event
function pushDataLayer(eventName, detail) {
var dataLayerObject = {
event: "onsched_interactions",
onsched_action: eventName
};

// Add all keys from the event detail to the dataLayerObject
if (detail && typeof detail === "object") {
for (var key in detail) {
if (detail.hasOwnProperty(key)) {
dataLayerObject[key] = detail[key];
}
}
}

// Push to dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(dataLayerObject);
}

// Get references to the relevant OnSched elements
var availabilityElement = document.getElementById('availability');
var calendarElement = document.getElementById('calendar');

// Ensure the elements exist before attaching event listeners
if (availabilityElement) {
// Booking Confirmation Event
availabilityElement.addEventListener('bookingConfirmation', function(event) {
pushDataLayer('bookingConfirmation', event.detail);
});

// Click Time Event
availabilityElement.addEventListener('clickTime', function(event) {
pushDataLayer('clickTime', event.detail);
});
}

if (calendarElement) {
// Select Appointment Event
calendarElement.addEventListener('selectAppointment', function(event) {
pushDataLayer('selectAppointment', event.detail);
});

// Create Appointment Event (if applicable)
calendarElement.addEventListener('createAppointment', function(event) {
pushDataLayer('createAppointment', event.detail);
});

// Calendar View Change Event
calendarElement.addEventListener('calendarViewChange', function(event) {
pushDataLayer('calendarViewChange', event.detail);
});
}
})();
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  OnSched Interactions and Appointment Booking As a Conversion with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p>You can use the <a href="https://www.onsched.com/" target="_blank" rel="noopener">OnSched</a> event listener and Google Tag Manager (GTM) to track interactions in the OnSched booking flow, such as successful appointment scheduling, as well as events and conversions in analytics platforms like Google Analytics (GA4), Piwik Pro, and Mixpanel. By implementing this tracking, you can gain valuable insights into user interactions and optimize your marketing strategies.</p>
<h3><span data-preserver-spaces="true">Step 1: Add the OnSched Event Listener Script</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Start by copying the OnSched event listener script (provided below) and adding it to a new </span><strong><span data-preserver-spaces="true">Custom HTML tag</span></strong><span data-preserver-spaces="true"> in Google Tag Manager. Configure this tag to trigger on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true">, ensuring </span><span data-preserver-spaces="true">that the</span><span data-preserver-spaces="true"> script runs </span><span data-preserver-spaces="true">only</span><span data-preserver-spaces="true"> after the </span><span data-preserver-spaces="true">page’s</span><span data-preserver-spaces="true"> DOM is fully loaded.</span></p>
<h4><span data-preserver-spaces="true">What Does the OnSched Event Listener Do?</span></h4>
<p><span data-preserver-spaces="true">The script listens for user interactions within the OnSched booking flow and triggers a dataLayer event with the name </span><strong><span data-preserver-spaces="true">onsched_interactions</span></strong><span data-preserver-spaces="true">. The event listener tracks key interactions such as:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Booking Confirmation</span></strong></li>
<li><strong><span data-preserver-spaces="true">Time Slot Click</span></strong></li>
<li><strong><span data-preserver-spaces="true">Appointment Selection</span></strong></li>
<li><strong><span data-preserver-spaces="true">Appointment Creation</span></strong></li>
<li><strong><span data-preserver-spaces="true">Calendar View Change</span></strong></li>
</ul>
<p><span data-preserver-spaces="true">These interactions are captured and pushed to the dataLayer, making them available </span><span data-preserver-spaces="true">for use</span><span data-preserver-spaces="true"> in your analytics tools.</span></p>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, set up a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM to capture the dataLayer events emitted by the OnSched event listener. Use the event name </span><strong><span data-preserver-spaces="true">onsched_interactions</span></strong><span data-preserver-spaces="true"> in your trigger configuration to ensure it fires whenever any OnSched interaction occurs.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define DataLayer Variables in GTM</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To extract specific details about each OnSched interaction, create the following dataLayer variables in GTM:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">onsched_action</span></strong><span data-preserver-spaces="true">: Returns the type of OnSched interaction/event (e.g., </span><span data-preserver-spaces="true">bookingConfirmation</span><span data-preserver-spaces="true">, clickTime, selectAppointment, etc.).</span></li>
<li><strong><span data-preserver-spaces="true">[Other Variables]</span></strong><span data-preserver-spaces="true">: Additional details about each interaction can be obtained from the </span><strong><span data-preserver-spaces="true">event</span><span data-preserver-spaces="true">.detail</span></strong><span data-preserver-spaces="true"> object. For instance:</span>
<ul>
<li><strong><span data-preserver-spaces="true">Appointment details</span></strong><span data-preserver-spaces="true"> (e.g., time, date, attendee information)</span></li>
<li><strong><span data-preserver-spaces="true">Calendar state changes</span></strong><span data-preserver-spaces="true"> (e.g., month or week view)</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">These variables allow you to dynamically capture and utilize detailed OnSched booking information in your analytics and marketing setups.</span></p>
<h3><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Once </span><span data-preserver-spaces="true">you’ve</span><span data-preserver-spaces="true"> created the triggers and variables, you can build your marketing tags and pixels in GTM. Examples include Google Analytics (GA4) </span><span data-preserver-spaces="true">event tags</span><span data-preserver-spaces="true"> or Piwik Pro event tags. Attach the </span><strong><span data-preserver-spaces="true">onsched_interactions</span></strong><span data-preserver-spaces="true"> trigger to your tags, and use the dataLayer variables to add context to the OnSched booking form events. This additional context enhances your analytics data by providing granular insights into user </span><span data-preserver-spaces="true">behaviour</span><span data-preserver-spaces="true">.</span></p>
<p><strong>Additional Notes</strong></p>
<p><span>The OnSched event listener script is&nbsp;<strong>Tag Manager agnostic</strong>, meaning it can be implemented in any Tag Management Solution (TMS). However, keep in mind that the core implementation principles remain the same regardless of the platform.</span></p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: To implement the OnSched tracking faster, scroll down this page to find a GTM recipe template. Download, customize, and use this template to streamline your OnSched tracking implementation.</span></p>
<p><span data-preserver-spaces="true">If you have any further adjustments or additional requirements, feel free to share!</span></p>
								</div>
				</div>
					</div>`,
		slug: 'onsched',
		logoPath: '/logos/onsched.jpg'
	}, {
		title: 'Amelia Appointment Booking Form',
		listDescription: `Use this Amelia Appointment Booking Form event listener to measure the booking form flow and completion.`,
		code: `<script>
(function () {
// Ensure dataLayer is initialized
window.dataLayer = window.dataLayer || [];

// Define a helper function to push events to the dataLayer
function pushToDataLayer(action, data) {
window.dataLayer.push({
event: "ameliaAppointmentEvent",
ameliaAppointmentAction: action,
ameliaAppointmentData: data || {}
});
}

// Define Amelia hooks
window.ameliaActions = {
ViewContent: function (success, error, data) {
pushToDataLayer("Form loaded", data);
},
SelectService: function (success, error, data) {
pushToDataLayer("Service selected", data);
},
SelectCategory: function (success, error, data) {
pushToDataLayer("Category selected", data);
},
SelectEmployee: function (success, error, data) {
pushToDataLayer("Employee selected", data);
},
SelectLocation: function (success, error, data) {
pushToDataLayer("Location selected", data);
},
SelectPackage: function (success, error, data) {
pushToDataLayer("Package selected", data);
},
InitInfoStep: function (success, error, data) {
pushToDataLayer("Info step loaded", data);
},
customValidation: function (success, error, data) {
pushToDataLayer("Custom validation", data);
},
InitiateCheckout: function (success, error, data) {
pushToDataLayer("Payment step loaded", data);
},
beforeBooking: function (success, error, data) {
pushToDataLayer("Confirm button clicked", data);
// Call the success callback to allow booking to proceed
if (typeof success === "function") success();
},
Schedule: function (success, error, data) {
pushToDataLayer("On-site booking completed", data);
},
Purchased: function (success, error, data) {
pushToDataLayer("Online booking completed", data);
}
};
})();
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track   Amelia Appointment Booking Form Interactions and Appointment Booking In Google Analytics (GA4), etc., with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Using the <a href="https://wpamelia.com/" target="_blank" rel="noopener">Amelia </a></span><span data-preserver-spaces="true">appointment booking form event listener script</span><span data-preserver-spaces="true"> and Google Tag Manager, you can seamlessly track appointment booking form interactions and successful scheduling as events and conversions in analytics platforms like Google Analytics (GA4), Meta Ads, Google Ads, and Piwik Pro. This process provides valuable data for understanding user behaviour and optimizing your appointment scheduling funnel.</span></p>
<p><span data-preserver-spaces="true">Follow these steps to implement the tracking:</span></p>
<h3><strong><span data-preserver-spaces="true">Step 1: Add the Event Listener Script in GTM</span></strong></h3>
<p><span data-preserver-spaces="true">Start by creating a new </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true"> tag in Google Tag Manager. Copy and paste the Amelia event listener script into this tag.</span></p>
<p><span data-preserver-spaces="true">Configure the tag to trigger on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> to ensure it fires after the Amelia form is fully loaded.</span></p>
<p><span data-preserver-spaces="true">The Amelia appointment booking form event listener script listens for user interactions with the appointment booking form and pushes events to the dataLayer. The primary event name is </span><strong><span data-preserver-spaces="true">ameliaAppointmentEvent</span></strong><span data-preserver-spaces="true">, which tracks various stages of the booking process, such as form loading, service selection, and successful scheduling.</span></p>
<h3><strong><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></strong></h3>
<p><span data-preserver-spaces="true">To capture these interactions, set up a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM. Use the event name:</span></p>
<p><strong><span data-preserver-spaces="true">ameliaAppointmentEvent</span></strong></p>
<p><span data-preserver-spaces="true">This trigger will activate whenever an event matching this name </span><span data-preserver-spaces="true">is pushed</span><span data-preserver-spaces="true"> to the dataLayer.</span></p>
<h3><strong><span data-preserver-spaces="true">Step 3: Create Data Layer Variables</span></strong></h3>
<p><span data-preserver-spaces="true">Next, define the variables in GTM to capture key details about the events:</span></p>
<ol>
<li><strong><span data-preserver-spaces="true">ameliaAppointmentAction</span></strong>
<ul>
<li><span data-preserver-spaces="true">Provides the specific interaction or event that occurred, such as:</span>
<ul>
<li><span data-preserver-spaces="true">Form loaded</span></li>
<li><span data-preserver-spaces="true">Service selected</span></li>
<li><span data-preserver-spaces="true">Payment step loaded</span></li>
<li><span data-preserver-spaces="true">Online booking completed</span></li>
<li><span data-preserver-spaces="true">Category selected</span></li>
<li><span data-preserver-spaces="true">Employee selected</span></li>
<li><span data-preserver-spaces="true">Location selected</span></li>
<li><span data-preserver-spaces="true">Package selected</span></li>
<li><span data-preserver-spaces="true">Info step loaded</span></li>
<li><span data-preserver-spaces="true">Custom validation</span></li>
<li><span data-preserver-spaces="true">Confirm button clicked</span></li>
<li><span data-preserver-spaces="true">On-site booking completed</span></li>
<li><span data-preserver-spaces="true">Online booking completed</span></li>
</ul>
</li>
</ul>
</li>
<li><strong><span data-preserver-spaces="true">ameliaAppointmentData</span></strong>
<ul>
<li><span data-preserver-spaces="true">Captures additional information about each event, such as service details, employee, or location selected.</span></li>
<li><span data-preserver-spaces="true">Use this object to retrieve granular </span><span data-preserver-spaces="true">details about</span><span data-preserver-spaces="true"> the appointment booking flow.</span></li>
</ul>
</li>
</ol>
<p><span data-preserver-spaces="true">These variables enrich your event data, enabling advanced segmentation and analysis in your analytics tools.</span></p>
<h3><strong><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Pixels</span></strong></h3>
<p><span data-preserver-spaces="true">With your triggers and variables in place,</span><span data-preserver-spaces="true"> create marketing tags or pixels for platforms like Google Analytics (GA4) or Piwik Pro.</span><span data-preserver-spaces="true"> Attach the </span><strong><span data-preserver-spaces="true">ameliaAppointmentEvent</span></strong><span data-preserver-spaces="true"> trigger and utilize the variables in your tag configurations. This approach ensures that each Amelia appointment form interaction is tracked with meaningful context, improving your ability to measure conversions and refine your marketing strategies.</span></p>
<p><strong>Additional Notes:</strong></p>
<p><span>The Amelia event listener script is&nbsp;<strong>Tag Manager agnostic</strong>, meaning it can be implemented in other Tag Management Systems (TMS) besides Google Tag Manager. Regardless of the TMS used, the implementation principles remain consistent.</span></p>
<p>To save time during the setup process, scroll down this resource page to download a customizable GTM recipe template. This template helps you track Amelia’s appointment form interactions and conversions quickly and efficiently.</p>
								</div>
				</div>
					</div>`,
		slug: 'amelia-appointment-booking-form',
		logoPath: '/logos/amelia.jpg'
	}, {
		title: 'GetFeedback',
		listDescription: `Collect data on how users interact with the GetFeedBack widget in your measurement tool.`,
		code: `<script>
window.usabilla_live('setEventCallback', function(category, action, label, value, userData) {
// Map actions to descriptive event types and categories
var eventMapping = {
"Feedback:Open": { type: "Feedback Form Opened", category: "Web Buttons" },
"Feedback:Success": { type: "Feedback Submitted", category: "Web Buttons" },
"Campaign:Open": { type: "Campaign Shown", category: "Campaigns" },
"Campaign:Success": { type: "Campaign Completed", category: "Campaigns" },
"Campaign:NextPage": { type: "Campaign Page Changed", category: "Campaigns" },
"Campaign:Closed": { type: "Campaign Closed", category: "Campaigns" },
"BoostCTA:Clicked": { type: "Boost CTA Clicked", category: "Campaigns" },
"Passive:Closed": { type: "Passive Feedback Closed", category: "Web Buttons" },
"InPage:NextPage": { type: "In-Page Form Page Changed", category: "In-Page Survey" },
"InPage:FeedbackGiven": { type: "In-Page Feedback Submitted", category: "In-Page Survey" }
};

// Find the event mapping, or default to "Unknown Event"
var eventDetails = eventMapping[action] || { type: "Unknown Event", category: "Unknown" };

// Push the event to dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'getFeedbackInteraction',
'gfEventType': eventDetails.type, // Short descriptive name
'gfCategory': eventDetails.category, // Event category
'gfAction': action, // Raw action name
'gfLabel': label || null, // Additional details (e.g., comments, IDs)
'gfValue': value || null, // Numeric value (e.g., ratings)
'gfUserData': userData || {} // Additional user data
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Interactions With The GetFeedBack Widget with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This guide will show you how to use the <a href="https://www.getfeedback.com/en/" target="_blank" rel="noopener">GetFeedback</a> event listener script </span><span data-preserver-spaces="true">in combination with</span><span data-preserver-spaces="true"> Google Tag Manager (GTM) to track website visitors’ interactions with the GetFeedback widget. </span><span data-preserver-spaces="true">By implementing</span><span data-preserver-spaces="true"> this setup</span><span data-preserver-spaces="true">, you can</span><span data-preserver-spaces="true"> capture detailed interaction data and send it to analytics platforms like Google Analytics (GA4), Piwik Pro, or others.</span></p>
<h4><span data-preserver-spaces="true">Step 1: Add the GetFeedback Event Listener Script to GTM</span></h4>
<p>&nbsp;</p>
<p><span>Begin by creating a new custom HTML tag in Google Tag Manager. Copy the provided GetFeedback event listener script and paste it into this tag. Assign the tag a descriptive name, such as “cHTML—Get Feedback Listener,” and configure it to trigger on <strong>DOM Ready</strong>.</span></p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Firing on DOM Ready ensures the event listener </span><span data-preserver-spaces="true">is initialized</span><span data-preserver-spaces="true"> after </span><span data-preserver-spaces="true">the widget has loaded</span><span data-preserver-spaces="true">.</span></p>
<p><span data-preserver-spaces="true">The event listener script tracks interactions with the embedded GetFeedback widget and pushes a dataLayer event named </span><strong><span data-preserver-spaces="true">getFeedbackInteraction</span></strong><span data-preserver-spaces="true">. These events capture website visitors’ actions, including opening the feedback form, submitting feedback, and interacting with campaigns or in-page forms.</span></p>
<h4><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, set up a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM to listen for the dataLayer event emitted by the GetFeedback script. In the trigger configuration, set the event name to “</span><strong><span data-preserver-spaces="true">getFeedbackInteraction”</span></strong><span data-preserver-spaces="true">. This trigger will fire tags based on interactions tracked by the event listener.</span></p>
<h4><span data-preserver-spaces="true">Step 3: Define Data Layer Variables in GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To access detailed information about GetFeedback interactions, create the following dataLayer variables in GTM:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">gfEventType</span></strong><span data-preserver-spaces="true">: Returns a short, descriptive name of the interaction (e.g., “Feedback Form Opened,” “Campaign Completed”).</span></li>
<li><strong><span data-preserver-spaces="true">gfCategory</span></strong><span data-preserver-spaces="true">: Categorizes the event (e.g., “Web Buttons,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“Campaigns”).</span></li>
<li><strong><span data-preserver-spaces="true">gfAction</span></strong><span data-preserver-spaces="true">: Provides the raw event action name (e.g., “Feedback</span><span data-preserver-spaces="true">:Open</span><span data-preserver-spaces="true">,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“Campaign</span><span data-preserver-spaces="true">:Closed</span><span data-preserver-spaces="true">“).</span></li>
<li><span data-preserver-spaces="true">(Optional) </span><span data-preserver-spaces="true">You can also create </span><span data-preserver-spaces="true">variables for</span> <strong><span data-preserver-spaces="true">gfLabel</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">gfValue</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">gfUserData</span></strong><span data-preserver-spaces="true"> to capture additional details such as labels, numeric values, and user-specific data.</span></li>
</ul>
<h4><span data-preserver-spaces="true">Step 4: Configure Your Marketing Tags</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Once you’ve created the custom event trigger and variables, use them to configure your marketing tags. For example, in a Google Analytics (GA4) event tag, you can include the variables to add context to the GetFeedback interactions:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: getFeedbackInteraction</span></li>
<li><strong><span data-preserver-spaces="true">Event Parameters</span></strong><span data-preserver-spaces="true">:</span>
<ul>
<li><span data-preserver-spaces="true">Event Type: {{dlv – gfEventType}}</span></li>
<li><span data-preserver-spaces="true">Category: {{dlv – gfCategory}}</span></li>
<li><span data-preserver-spaces="true">Action: {{dlv – gfAction}}</span></li>
</ul>
</li>
</ul>
<p><span data-preserver-spaces="true">Attach the custom event trigger to your tag </span><span data-preserver-spaces="true">so it fires</span><span data-preserver-spaces="true"> whenever a GetFeedback interaction </span><span data-preserver-spaces="true">is tracked</span><span data-preserver-spaces="true">.</span></p>
<p><strong>Additional Notes:</strong></p>
<p><span data-preserver-spaces="true">The GetFeedback event listener script </span><span data-preserver-spaces="true">can be implemented</span><span data-preserver-spaces="true"> in other Tag Management Solutions (TMS) (e.g., Piwik Pro Tag Manager) and not just restricted to Google Tag Manager. However, the implementation principles, </span><span data-preserver-spaces="true">including setting up custom event triggers and variables</span><span data-preserver-spaces="true">, remain consistent across platforms.</span></p>
<p><span data-preserver-spaces="true">To streamline your implementation, scroll down this resource page </span><span data-preserver-spaces="true">to find</span><span data-preserver-spaces="true"> a GTM recipe template. Download, customize, and use this template </span><span data-preserver-spaces="true">to quickly track GetFeedback widget interactions</span><span data-preserver-spaces="true">.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'getfeedback',
		logoPath: '/logos/getfeedback.jpg'
	}, {
		title: 'Comm100',
		listDescription: `Measure the impact Comm100 user interactions have on your business KPIs using the event listener.`,
		code: `<script>
// Ensure Comm100API is available before setting up listeners
if (typeof Comm100API !== 'undefined') {

// Rating Event
Comm100API.on('livechat.chat.visitor.rate', function (rating) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Visitor rated chat',
rating_score: rating.score || null,
rating_comment: rating.comment || null
});
});

// Visitor Send Text Message Event
Comm100API.on('livechat.chat.visitor.sendText', function (event) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Visitor sent text message',
message_content: event.data.text || null
});
});

// Visitor Input Event
Comm100API.on('livechat.chat.visitor.input', function (content) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Visitor is typing',
input_content: content || null
});
});

// Chat Display Event
Comm100API.on('livechat.chat.display', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Chat panel displayed'
});
});

// Chat Minimize Event
Comm100API.on('livechat.chat.minimize', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Chat panel minimized'
});
});

// Chat Restore Event
Comm100API.on('livechat.chat.restore', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Chat panel restored'
});
});

// Chat Close Event
Comm100API.on('livechat.chat.close', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Chat panel closed'
});
});

// Agent Join Chat Event
Comm100API.on('livechat.chat.agent.join', function (agent) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Agent joined chat',
agent_id: agent.id || null,
agent_name: agent.name || null,
agent_title: agent.title || null,
agent_bio: agent.bio || null
});
});

// Agent Leave Chat Event
Comm100API.on('livechat.chat.agent.leave', function (agent) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Agent left chat',
agent_id: agent.id || null,
agent_name: agent.name || null,
agent_title: agent.title || null,
agent_bio: agent.bio || null
});
});

// Agent Input Event
Comm100API.on('livechat.chat.agent.input', function (agent, content) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
event: 'comm100_interactions',
comm100_action: 'Agent is typing',
agent_id: agent.id || null,
agent_name: agent.name || null,
message_content: content || null
});
});
} else {
console.error('Comm100API is not defined. Ensure the Comm100 widget is loaded.');
}
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Interactions With The Embedded Comm100 Chat Widget with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Here are the instructions for using</span><span data-preserver-spaces="true">&nbsp;the <a href="https://www.comm100.com/" target="_blank" rel="noopener">Comm100</a> event listener script with Google Tag Manager (GTM) to track website visitor interactions with the Comm100 chat widget. </span><span data-preserver-spaces="true">You’ll</span><span data-preserver-spaces="true"> learn </span><span data-preserver-spaces="true">how</span><span data-preserver-spaces="true"> to capture these events </span><span data-preserver-spaces="true">in</span><span data-preserver-spaces="true"> analytics tools like Google Analytics (GA4), Piwik Pro, and others.</span><span data-preserver-spaces="true"> Follow the step-by-step instructions below to implement this setup efficiently.</span></p>
<h4><span data-preserver-spaces="true">Step 1: Add the Event Listener Script to GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Begin by creating a new custom HTML tag in Google Tag Manager. Paste the provided Comm100 event listener script into the tag and configure it to trigger on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true">. Naming the tag appropriately (e.g., “cHTML – Comm100 Event Listener”) will help with organization.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Firing on DOM Ready ensures the Comm100 widget has loaded before the event listener </span><span data-preserver-spaces="true">is initialized</span><span data-preserver-spaces="true">.</span></p>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">This script listens for various Comm100 chat widget interactions and pushes corresponding events into the dataLayer. The emitted dataLayer event name is </span><strong><span data-preserver-spaces="true">comm100_interactions</span></strong><span data-preserver-spaces="true">, and the tracked interactions include:</span></p>
<ul>
<li><span data-preserver-spaces="true">Chat panel displayed</span></li>
<li><span data-preserver-spaces="true">Visitor</span><span data-preserver-spaces="true"> sent a message</span></li>
<li><span data-preserver-spaces="true">Agent joined the chat</span></li>
<li><span data-preserver-spaces="true">Visitor is typing</span></li>
<li><span data-preserver-spaces="true">And more</span></li>
</ul>
<h4><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, create a custom event trigger in GTM. Use </span><strong><span data-preserver-spaces="true">comm100_interactions</span></strong><span data-preserver-spaces="true"> as the event name. This trigger will </span><span data-preserver-spaces="true">ensure your tags fire</span><span data-preserver-spaces="true"> whenever the Comm100 chat widget interactions </span><span data-preserver-spaces="true">are pushed</span><span data-preserver-spaces="true"> to the dataLayer. Name the trigger appropriately, such as “</span><strong><span data-preserver-spaces="true">CE – Comm100 Interaction Trigger</span></strong><span data-preserver-spaces="true">.”</span></p>
<h4><span data-preserver-spaces="true">Step 3: Define Comm100 Related DataLayer Variables In GTM</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To utilize the event details, define the following dataLayer variables in GTM. These variables capture the specific attributes of Comm100 interactions:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">comm100_action</span></strong><span data-preserver-spaces="true"> – The interaction type (e.g., “Visitor sent text message,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“Chat panel restored”).</span></li>
<li><strong><span data-preserver-spaces="true">rating_score</span></strong><span data-preserver-spaces="true"> – The rating score provided by the visitor (if applicable).</span></li>
<li><strong><span data-preserver-spaces="true">rating_comment</span></strong><span data-preserver-spaces="true"> – Any comments left by the visitor during a rating event.</span></li>
<li><strong><span data-preserver-spaces="true">message_content</span></strong><span data-preserver-spaces="true"> – The content of messages sent by the visitor or agent.</span></li>
<li><strong><span data-preserver-spaces="true">agent_id</span></strong><span data-preserver-spaces="true"> – The unique ID of the agent.</span></li>
<li><strong><span data-preserver-spaces="true">agent_name</span></strong><span data-preserver-spaces="true"> – The agent’s name.</span></li>
<li><strong><span data-preserver-spaces="true">agent_title</span></strong><span data-preserver-spaces="true"> – The agent’s title.</span></li>
<li><strong><span data-preserver-spaces="true">agent_bio</span></strong><span data-preserver-spaces="true"> – Additional details about the agent.</span></li>
</ul>
<h4><span data-preserver-spaces="true">Step 4: Create Tags and Use Variables</span></h4>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">With triggers and variables set up, the next step is to create your marketing tags or pixels. For example, you might </span><span data-preserver-spaces="true">create</span><span data-preserver-spaces="true"> a Google Analytics (GA4) tag to capture Comm100 interactions.</span></p>
<p><span data-preserver-spaces="true">Attach the “</span><strong><span data-preserver-spaces="true">CE – Comm100 Interaction Trigger</span></strong><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> to these tags and utilize the dataLayer variables in the tag configuration to provide context. For instance:</span></p>
<ul>
<li><span data-preserver-spaces="true">Use </span><strong><span data-preserver-spaces="true">comm100_action</span></strong><span data-preserver-spaces="true"> to track specific events, such as “Visitor is typing</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> or “Agent joined chat.”</span></li>
<li><span data-preserver-spaces="true">Include </span><strong><span data-preserver-spaces="true">agent_name</span></strong><span data-preserver-spaces="true"> or </span><strong><span data-preserver-spaces="true">message_content</span></strong><span data-preserver-spaces="true"> in custom dimensions or event parameters to enrich your analytics data.</span></li>
</ul>
<p><strong>Additional Notes:</strong></p>
<p>This Comm100 event listener script can be implemented using other Tag Management Solutions (TMS), such as Piwik Pro Tag Manager. The setup process remains similar across platforms.</p>
<p>Scrolling down this page, you can download a GTM recipe template, which can save you hours in implementation. Customize it and use it to easily start tracking Comm100 interactions.</p>
								</div>
				</div>
					</div>`,
		slug: 'comm100',
		logoPath: '/logos/comm100.jpg'
	}, {
		title: 'Sirvoy',
		listDescription: `This Sirvoy event listener allows you to track user interactions with the Sirvoy hotel booking system.`,
		code: ``,
		description: ``,
		slug: 'sirvoy',
		logoPath: '/logos/sirvoy.jpg'
	}, {
		title: 'SendBird',
		listDescription: `An event listener that simplifies and enables tracking interactions with your SendBird website widget.`,
		code: ``,
		description: ``,
		slug: 'sendbird',
		logoPath: '/logos/sendbird.jpg'
	}, {
		title: 'Calendly',
		listDescription: `Measure when users schedule a meeting in your embedded Calendly widget as conversions/events.`,
		code: `<script>
window.dataLayer = window.dataLayer ||[];
window.addEventListener('message',
function(e) {
if (e.data.event && e.data.event.indexOf('calendly') === 0) {
window.dataLayer.push({
'event' : 'calendly',
'calendly_event' : e.data.event.split('.')[1]
});
}
}
);
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Calendly Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Calendly is a great appointment scheduling tool, but tracking Calendy conversions and the user funnel on your booking page will enhance your marketing data.&nbsp;</span></p>
<p><span data-preserver-spaces="true">With the Calendly event listener and Google Tag Manager, you can track how users complete the scheduling funnel into your analytics tools and advertising platform.</span></p>
<p><span data-preserver-spaces="true">The data can be helpful in measuring conversions, building a marketing audience, and data segmentation for deeper marketing analysis.</span></p>
<p><span data-preserver-spaces="true">To implement this, all you have to do is create a new custom HTML tag in Google Tag Manager, copy and paste the Calendly event listener code and fire the tag on Pageview or DOM ready.</span></p>
<p><span data-preserver-spaces="true">The code makes it possible to listen for Calendly activities and user interactions, to fire your tag on these interactions create a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[calendly]</span></strong></p>
<p><span data-preserver-spaces="true">To identify the actions performed, you’ll have to create a dataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[calendly_event]</span></strong><span data-preserver-spaces="true">, which returns the Calendly action (successful booking, profile_page_viewed, event_type_viewed)</span></p>
<p><span data-preserver-spaces="true">These can be pushed dynamically into your analytics tools or streamlining your trigger to fire for Calendly conversions using trigger conditions and the dataLayer variable key.</span></p>
<p><strong>The creator of this code is <a href="https://www.analyticsmania.com/">Julius Fedorovicius</a> and can be found here <a href="https://www.analyticsmania.com/post/how-to-track-calendly-with-google-tag-manager-and-google-analytics-4/">https://www.analyticsmania.com/post/how-to-track-calendly-with-google-tag-manager-and-google-analytics-4/</a></strong></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'calendly',
		logoPath: '/logos/calendly.jpg'
	}, {
		title: 'Podia',
		listDescription: `Capture user data in Podia, and also measure conversions such as a purchase using this event listener.`,
		code: `<script>
// pushes the user data into dataLayer 
if(Podia.Customer) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'podia_user_data',
'userdata': Podia.Customer
});
};
// when a customer purchases a course, product, or membership subscription (both free and paid) 
if(Podia.Conversion) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'podia_conversion',
'conversiondata': Podia.Conversion
});
};
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Podia User Data &amp; Conversions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Tracking Podia conversions and pushing the user data into the dataLayer is possible and seamless using Google Tag Manager and the Podia event listener script on this page.</span></p>
<p><span data-preserver-spaces="true">To implement this, create a custom HTML tag where you’ll paste the event listener code and fire it on pageview or DOM ready (always recommended).</span></p>
<p><span data-preserver-spaces="true">The next step in this implementation is to create a custom event with the event name of&nbsp;</span><strong><span data-preserver-spaces="true">[podia_conversion]</span></strong><span data-preserver-spaces="true">, which gets fired on all conversions, when a customer purchases a course, product, or membership subscription (both free and paid)</span></p>
<p><span data-preserver-spaces="true">Also, an event fires on all page view in Podia, with the event name&nbsp;</span><strong><span data-preserver-spaces="true">[podia_user_data]</span></strong><span data-preserver-spaces="true">, this event carries the user data in the dataLayer object&nbsp;</span><strong><span data-preserver-spaces="true">[userdata]</span></strong><span data-preserver-spaces="true">, the data in the object are;</span></p>
<ul>
<li><span data-preserver-spaces="true">id</span></li>
<li><span data-preserver-spaces="true">email</span></li>
<li><span data-preserver-spaces="true">first_name</span></li>
<li><span data-preserver-spaces="true">last_name</span></li>
<li><span data-preserver-spaces="true">stripe_id</span></li>
<li><span data-preserver-spaces="true">created_at</span></li>
</ul>
<p><span data-preserver-spaces="true">The dataLayer&nbsp;</span><strong><span data-preserver-spaces="true">[conversiondata]</span></strong><span data-preserver-spaces="true">, which is present in the Podia conversion event&nbsp;</span><strong><span data-preserver-spaces="true">[podia_conversion]</span></strong><span data-preserver-spaces="true">, it’s an object data type with information about the conversion, such as;</span></p>
<ul>
<li><span data-preserver-spaces="true">customer data</span></li>
<li><span data-preserver-spaces="true">revenue_cents</span></li>
<li><span data-preserver-spaces="true">revenue</span></li>
<li><span data-preserver-spaces="true">currency</span></li>
<li><span data-preserver-spaces="true">an object containing (product type, ID, product name and order ID)</span></li>
</ul>
<p><span data-preserver-spaces="true">You can fire your marketing tags/pixels on the conversion event&nbsp;</span><strong><span data-preserver-spaces="true">[podia_conversion]</span></strong><span data-preserver-spaces="true">&nbsp;that you created earlier.</span></p>
<p><span data-preserver-spaces="true">Boom you are now tracking Podia conversions.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'podia',
		logoPath: '/logos/podia.jpg'
	}, {
		title: 'SnapEngage',
		listDescription: `An event listener that makes it easy to track user interactions with the SnapEngage widget on your website.`,
		code: `<script>
// For tracking Snap Engage Events in the Google Tag Manager GTM
// Within GTM you'll need to setup the following dataLayer variables to help capture these events:
// SnapEngage_eventCategory
// SnapEngage_eventAction
// SnapEngage_eventLabel
// https://developer.snapengage.com/javascript-api/

var seAgent;
var seType;
var seStatus;

window.dataLayer = window.dataLayer || [];

SnapEngage.setCallback('StartChat', function(email, msg, type) {
// https://developer.snapengage.com/javascript-api/#startchat-event
seAgent = email;
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'StartChat',
'SnapEngage_eventLabel': seAgent
});
});

SnapEngage.setCallback('OpenProactive', function(agent, msg) {
// https://developer.snapengage.com/javascript-api/#openproactive-event
seAgent = agent;
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'OpenProactive',
'SnapEngage_eventLabel': seAgent
});
});

SnapEngage.setCallback('Close', function(type, status) {
// https://developer.snapengage.com/javascript-api/#close-event
seType = type;
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'Chat Closed',
'SnapEngage_eventLabel': 'SnapEngage ' + seType + ' window closed.'
});
});

SnapEngage.setCallback('Open', function(status) {
// https://developer.snapengage.com/javascript-api/#open-event
seStatus = status;
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'Chat Opened',
'SnapEngage_eventLabel': 'SnapEngage form opened and widget status was: ' + seStatus
});
});

SnapEngage.setCallback('StartCallme', function(phone) {
// https://developer.snapengage.com/javascript-api/#startcallme-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'StartCallme',
'SnapEngage_eventLabel': 'SnapEngage call me request started.'
});
});

SnapEngage.setCallback('ChatMessageSent', function(msg) {
// https://developer.snapengage.com/javascript-api/#chatmessagesent-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'ChatMessageSent',
'SnapEngage_eventLabel': 'visitor submited a chat message from: ' + window.location.href
});
});

SnapEngage.setCallback('ChatMessageReceived', function (agent, msg) {
// https://developer.snapengage.com/javascript-api/#chatmessagereceived-event
seAgent = agent;
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'ChatMessageReceived',
'SnapEngage_eventLabel': 'message from ' + seAgent + ' was received by the visitor on: ' + window.location.href
});
});

SnapEngage.setCallback('MessageSubmit', function(email, msg) {
// https://developer.snapengage.com/javascript-api/#messagesubmit-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'MessageSubmit',
'SnapEngage_eventLabel': 'Offline message sent from: ' + window.location.href
});
});

SnapEngage.setCallback('InlineButtonClicked', function(options) {
// https://developer.snapengage.com/javascript-api/#button-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'InlineButtonClicked',
'SnapEngage_eventLabel': 'botName:[' + options.botName + '] buttonLabel:[' + options.buttonLabel +'] buttonValue:['+ options.buttonValue + ']'
});
});

SnapEngage.setCallback(SnapEngage.callbacks.CHAT_ENDED, function(options) {
// https://developer.snapengage.com/javascript-api/#chatended-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'CHAT_ENDED',
'SnapEngage_eventLabel': options.endedByUser ? "Visitor" : "Agent or the System"
});
});

SnapEngage.setCallback('Minimize', function(isMinimized, chatType, boxType) {
// https://developer.snapengage.com/javascript-api/#minimize-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'Minimize',
'SnapEngage_eventLabel': 'Chatbox is' + (isMinimized ? '' : ' not') + ' minimized. Chat Type:[' + chatType + '] Chat Box:[' + boxType + "]"
});
});

SnapEngage.setCallback('RatingPromptClicked', function (botAlias, scaleType, selectedOption) {
// https://developer.snapengage.com/javascript-api/#rating-prompt-clicked-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'RatingPromptClicked',
'SnapEngage_eventLabel': 'botAlias:[' + botAlias + '] scaleType:[' + scaleType + '] selectedOption:[' + selectedOption + ']'
});
});

SnapEngage.setCallback('SwitchWidget', function(newWidgetId) {
// https://developer.snapengage.com/javascript-api/#switchwidget-event
window.dataLayer.push({
'event': 'snapEngageEvent',
'SnapEngage_eventCategory': 'SnapEngage',
'SnapEngage_eventAction': 'SwitchWidget',
'SnapEngage_eventLabel': 'widget ID: ' + newWidgetId
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  SnapEngage Interactions with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Track SnapEngage Chat interactions as an event in your analytics stacks to enhance your marketing data.&nbsp;</span></p>
<p><span data-preserver-spaces="true">By tracking these interactions, you’ll gain valuable insights into how these interactions affect your marketing funnel, website engagement metrics, conversions, and other critical business KPIs.</span></p>
<p><span data-preserver-spaces="true">To implement this, you will need to utilize both Google Tag Manager and the SnapEngage chat event listener JavaScript code.</span></p>
<p><span data-preserver-spaces="true">First, paste the event listener script into the GTM custom HTML tag and fire it on pageview or DOM ready.&nbsp;</span></p>
<p><span data-preserver-spaces="true">If you installed the SnapEngage chat script through Google Tag Manager, use the DOM-ready trigger instead.</span></p>
<p><span data-preserver-spaces="true">Next, create a custom event named [snapEngageEvent] emitted on all SnapEngage interactions.&nbsp;</span></p>
<p><span data-preserver-spaces="true">To determine the actual event, you will need to create dataLayer variables. The&nbsp;</span><strong><span data-preserver-spaces="true">[SnapEngage_eventAction]</span></strong><span data-preserver-spaces="true">&nbsp;variable returns the event description for actions such as;&nbsp;</span></p>
<ul>
<li><span data-preserver-spaces="true">StartChat</span></li>
<li><span data-preserver-spaces="true">OpenProactive</span></li>
<li><span data-preserver-spaces="true">Chat Closed</span></li>
<li><span data-preserver-spaces="true">Chat Opened</span></li>
<li><span data-preserver-spaces="true">StartCallme</span></li>
<li><span data-preserver-spaces="true">ChatMessageSent</span></li>
<li><span data-preserver-spaces="true">ChatMessageReceived</span></li>
<li><span data-preserver-spaces="true">MessageSubmit</span></li>
<li><span data-preserver-spaces="true">InlineButtonClicked</span></li>
<li><span data-preserver-spaces="true">CHAT_ENDED</span></li>
<li><span data-preserver-spaces="true">Minimize</span></li>
<li><span data-preserver-spaces="true">RatingPromptClicked</span></li>
<li><span data-preserver-spaces="true">SwitchWidget.&nbsp;</span></li>
</ul>
<p><span data-preserver-spaces="true">Use the&nbsp;</span><strong><span data-preserver-spaces="true">[SnapEngage_eventAction]</span></strong><span data-preserver-spaces="true">&nbsp;dataLayer variable as event parameters or for streamlining your trigger to fire on specific SnapEngage chat interactions.</span></p>
<p><span data-preserver-spaces="true">Create dataLayer variables available on some chat interactions for more information on specific interactions.&nbsp;</span></p>
<p><span data-preserver-spaces="true">For example, the&nbsp;</span><strong><span data-preserver-spaces="true">[SnapEngage_eventLabel]</span></strong><span data-preserver-spaces="true">&nbsp;variable returns an extra layer of information about the event and is available on all occasions. Likewise, the [SnapEngage_eventCategory] variable returns a constant value, “SnapEngage,” and it’s also available on all events.</span></p>
<p><span data-preserver-spaces="true">Finally, connect your marketing tags to the trigger and use the dataLayer variables you created to push each SnapEngage chat interaction to your analytics.</span></p>
<p>Credit: Code created by <a href="https://gist.github.com/nakitadog/865da97ce044a2a370587737ca72dbee" target="_blank" rel="noopener">Aaron Weiner</a></p>
<p>&nbsp;</p>
								</div>
				</div>
					</div>`,
		slug: 'snapengage',
		logoPath: '/logos/snapengage.jpg'
	}, {
		title: 'Saber Feedback',
		listDescription: `You can listen to and track how users provide feedback via the Saber Feedback widget on your website.`,
		code: `<script>
Saber.do('set_option', 'on_open', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'saberFeedbackInteractions',
'saberAction': 'on_open'
// Additional keys can be added here if needed
});
});

// Handler for when feedback is submitted
Saber.do('set_option', 'on_complete', function(data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'saberFeedbackInteractions',
'saberAction': 'on_complete',
'feedbackId': data.feedback_report.id,
'email': data.feedback_report.values.Email,
'category': data.feedback_report.values.Category,
'userId': data.feedback_report.values.user_id
// Include other relevant data as needed
});
});

// Handler for when the feedback widget is canceled
Saber.do('set_option', 'on_cancel', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'saberFeedbackInteractions',
'saberAction': 'on_cancel'
// Additional keys can be added here if needed
});
});

// Handler for when the feedback widget is closed
Saber.do('set_option', 'on_close', function() {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'saberFeedbackInteractions',
'saberAction': 'on_close'
// Additional keys can be added here if needed
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  User's Engagement With The Saber Feedback Widget with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This guide walks you through </span><span data-preserver-spaces="true">how to use</span><span data-preserver-spaces="true"> the Saber Feedback event listener script with Google Tag Manager (GTM) to monitor and track website visitor interactions with the embedded Saber Feedback widget. </span><span data-preserver-spaces="true">You can send this data to analytics platforms like Google Analytics (GA4), Piwik Pro, and others </span><span data-preserver-spaces="true">to enrich your insights</span><span data-preserver-spaces="true">.</span></p>
<h4><span data-preserver-spaces="true">Step 1: Add the Saber Feedback Event Listener Script to GTM</span></h4>
<p><span data-preserver-spaces="true">Start by copying the <a href="https://saberfeedback.com/" target="_blank" rel="noopener">Saber Feedback</a> event listener script provided above. Add this script to a new GTM tag of the custom HTML tag type. Configure the tag to trigger on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> to ensure the feedback widget has loaded before the listener activates.</span></p>
<p><span>💡&nbsp;<strong>Pro Tip:</strong> To avoid race conditions, always fire on DOM Ready when working with widgets implemented through GTM.</span></p>
<p>The Saber Feedback event listener script listens for various interactions with the feedback widget, such as opening, completing, canceling, or closing. For each interaction, it triggers a dataLayer event named <strong>saberFeedbackInteractions</strong> and includes details about the interaction.</p>
<p><span data-preserver-spaces="true">Here are the interactions it tracks:</span></p>
<ul>
<li><span data-preserver-spaces="true">Widget Opened (on_open)</span></li>
<li><span data-preserver-spaces="true">Feedback Submitted (on_complete)</span></li>
<li><span data-preserver-spaces="true">Widget Canceled (on_cancel)</span></li>
<li><span data-preserver-spaces="true">Widget Closed (on_close)</span></li>
</ul>
<h4><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h4>
<p><span data-preserver-spaces="true">Next, create a custom event trigger in GTM. Set the event name to:</span></p>
<p><strong>saberFeedbackInteractions</strong></p>
<p><span data-preserver-spaces="true">This trigger ensures that tags configured in GTM fire whenever a relevant interaction with the Saber Feedback widget occurs.</span></p>
<h4><span data-preserver-spaces="true">Step 3: Define DataLayer Variables in GTM</span></h4>
<p><span data-preserver-spaces="true">To extract meaningful data from the interactions, create the following dataLayer variables in GTM. Each variable corresponds to a key in the event data:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">saberAction</span></strong><span data-preserver-spaces="true">: Identifies the type of interaction (e.g., on_open, on_complete, on_cancel, on_close).</span></li>
<li><strong><span data-preserver-spaces="true">feedbackId</span></strong><span data-preserver-spaces="true">: Provides the unique ID of the submitted feedback.</span></li>
<li><strong><span data-preserver-spaces="true">email</span></strong><span data-preserver-spaces="true">: Captures the user’s email address </span><span data-preserver-spaces="true">at the time of</span><span data-preserver-spaces="true"> submitting feedback.</span></li>
<li><strong><span data-preserver-spaces="true">category</span></strong><span data-preserver-spaces="true">: Indicates the category selected during feedback submission.</span></li>
<li><strong><span data-preserver-spaces="true">userId</span></strong><span data-preserver-spaces="true">: Returns the user’s ID.</span></li>
</ul>
<p><span data-preserver-spaces="true">These variables can </span><span data-preserver-spaces="true">be used</span><span data-preserver-spaces="true"> to configure advanced triggers or to enrich the event data sent to your analytics tools.</span></p>
<h4><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h4>
<p><span data-preserver-spaces="true">After setting up the variables and triggers, the next step is to create your marketing tags and pixels. For instance, you can </span><span data-preserver-spaces="true">create</span><span data-preserver-spaces="true"> Google Analytics (GA4) event tags or Piwik Pro custom event tags. Attach the custom event trigger (saberFeedbackInteractions) to these tags. Use the variables you created earlier to pass additional context about the interactions.</span></p>
<p><span data-preserver-spaces="true">For example, you might configure a GA4 event tag to include the following parameters:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: saber_feedback</span></li>
<li><strong><span data-preserver-spaces="true">Event Parameters</span></strong><span data-preserver-spaces="true">: saberAction, </span><span data-preserver-spaces="true">feedbackId</span><span data-preserver-spaces="true">, email, category, userId</span></li>
</ul>
<p><span data-preserver-spaces="true">This configuration helps you track and analyze Saber Feedback interactions directly in your analytics platform.</span></p>
<p><strong>Additional Notes:</strong></p>
<p><span data-preserver-spaces="true">The Saber Feedback event listener script is Tag Manager agnostic, meaning </span><span data-preserver-spaces="true">it can be used</span><span data-preserver-spaces="true"> with any Tag Management Solution (TMS), not just Google Tag Manager. The principles of implementation remain the same across different TMS platforms.</span></p>
<p><span data-preserver-spaces="true">To save time, scroll</span><span data-preserver-spaces="true"> down this resource page to find a downloadable GTM recipe template.</span><span data-preserver-spaces="true"> You can customize and use it to streamline the </span><span data-preserver-spaces="true">tracking</span><span data-preserver-spaces="true"> of Saber Feedback widget interactions.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'saber-feedback',
		logoPath: '/logos/saber-feedback.jpg'
	}, {
		title: 'Crobox',
		listDescription: `With this event listener, you can track your visitors' shopping experiences in your Crobox store.`,
		code: ``,
		description: ``,
		slug: 'crobox',
		logoPath: '/logos/crobox.jpg'
	}, {
		title: 'Barns2 Plugin QuickView Pro',
		listDescription: `Easily measure if and pattern in how users engage with the item QuickView modal on your store.`,
		code: `<script>
(function() {
// Check if WCQuickViewPro is available
if (typeof window.WCQuickViewPro === 'undefined') {
console.error('WCQuickViewPro is not available.');
return;
}

// Function to push event to dataLayer
function pushToDataLayer(eventName, additionalData) {
var eventData = {
event: "wp_quickview_interactions",
wp_qp_action: eventName
};

// Merge additional data if available
if (additionalData) {
for (var key in additionalData) {
if (additionalData.hasOwnProperty(key)) {
eventData[key] = additionalData[key];
}
}
}

// Push to dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(eventData);
}

// Event listeners
jQuery(document).on('quick_view_pro:open', function() {
pushToDataLayer('quick_view_pro:open');
});

jQuery(document).on('quick_view_pro:load', function() {
pushToDataLayer('quick_view_pro:load');
});

jQuery(document).on('quick_view_pro:close', function() {
pushToDataLayer('quick_view_pro:close');
});

jQuery(document).on('quick_view_pro:added_to_cart', function(event, data) {
var additionalData = {};
if (data && data.response) {
additionalData.cart_message = data.response.cart_message || null;
additionalData.error = data.response.error || null;
additionalData.cart_hash = data.response.cart_hash || null;
}
pushToDataLayer('quick_view_pro:added_to_cart', additionalData);
});

})();
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Barns2 Plugin Item QuickView Modal Engagement with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This step-by-step guide will show you how to use the <a href="https://barn2.com/wordpress-plugins/woocommerce-quick-view-pro/" target="_blank" rel="noopener">Barns2 Plugin QuickView Pro</a> event listener and Google Tag Manager (GTM) to track website visitors’ interactions with the Quick View Modal (expand, close, and add to cart). </span><span data-preserver-spaces="true">By</span><span data-preserver-spaces="true"> integrating this tracking into your analytics platforms, such as Google Analytics (GA4), Piwik Pro, and others</span><span data-preserver-spaces="true">, you can gain deeper insights into user engagement with your item quick view modal widget in your e-commerce store</span><span data-preserver-spaces="true">.</span></p>
<h3><span data-preserver-spaces="true">Step 1: Add the Event Listener Script in GTM</span></h3>
<p><span>You can start by copying the Barns2 Plugin QuickView Pro event listener script provided in this resource and creating a <strong>Custom HTML tag</strong>&nbsp;in Google Tag Manager. Paste the script into the tag, and configure the trigger to fire on&nbsp;<strong>DOM Ready</strong>.</span></p>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip:</span></strong><span data-preserver-spaces="true"> Firing the tag on DOM Ready ensures that the event listener initializes </span><span data-preserver-spaces="true">only</span><span data-preserver-spaces="true"> after the Quick View Modal is available on the page.</span></p>
<p><span data-preserver-spaces="true">This event listener script listens for interactions with the Barns2 Plugin QuickView Modal and pushes a dataLayer event named wp_quickview_interactions for the following actions:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Expand</span></strong><span data-preserver-spaces="true">: When the Quick View Modal </span><span data-preserver-spaces="true">is opened</span><span data-preserver-spaces="true">.</span></li>
<li><strong><span data-preserver-spaces="true">Close</span></strong><span data-preserver-spaces="true">: When the modal is closed.</span></li>
<li><strong><span data-preserver-spaces="true">Add to Cart</span></strong><span data-preserver-spaces="true">: When a product </span><span data-preserver-spaces="true">is added</span><span data-preserver-spaces="true"> to the cart through the modal.</span></li>
<li><strong><span data-preserver-spaces="true">Load</span></strong><span data-preserver-spaces="true">: When the modal content is fully loaded.</span></li>
</ul>
<p><span data-preserver-spaces="true">Each event includes details about the interaction, such as the action type (wp_qp_action) and additional information (e.g., cart message, errors).</span></p>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h3>
<p><span data-preserver-spaces="true">To track these interactions, create a </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> in GTM. Set the </span><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true"> to:</span></p>
<p><span data-preserver-spaces="true"><strong>wp_quickview_interactions</strong>&nbsp;&nbsp;</span></p>
<p><span data-preserver-spaces="true">This trigger will fire for all QuickView Pro interactions tracked by the script.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define DataLayer Variables</span></h3>
<p><span data-preserver-spaces="true">Next, set up </span><strong><span data-preserver-spaces="true">Data Layer Variables</span></strong><span data-preserver-spaces="true"> in GTM to capture the interaction details. Below is a list of the variables you should create:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">wp_qp_action</span></strong><span data-preserver-spaces="true">: This returns the type of interaction or event that occurred (e.g., quick_view_pro</span><span data-preserver-spaces="true">:open</span><span data-preserver-spaces="true">, quick_view_pro</span><span data-preserver-spaces="true">:close</span><span data-preserver-spaces="true">, quick_view_pro:added_to_cart).</span></li>
<li><span data-preserver-spaces="true">Additional variables for specific interactions (optional):</span>
<ul>
<li><strong><span data-preserver-spaces="true">cart_message</span></strong><span data-preserver-spaces="true">: Captures the cart-related message when adding a product.</span></li>
<li><strong><span data-preserver-spaces="true">error</span></strong><span data-preserver-spaces="true">: Indicates if there was an error during the Add to Cart process.</span></li>
<li><strong><span data-preserver-spaces="true">cart_hash</span></strong><span data-preserver-spaces="true">: Stores the cart hash after a successful Add to Cart action.</span></li>
</ul>
</li>
</ul>
<h3><span data-preserver-spaces="true">Step 4: Configure Marketing Tags and Pixels</span></h3>
<p><span data-preserver-spaces="true">Once you’ve set up the variables and triggers, the next step is to create your marketing tags (e.g., Google Analytics [GA4], Piwik Pro, Mixpanel, or other platforms).</span></p>
<ul>
<li><span data-preserver-spaces="true">Attach the </span><strong><span data-preserver-spaces="true">Custom Event Trigger</span></strong><span data-preserver-spaces="true"> (wp_quickview_interactions) to the tag.</span></li>
<li><span data-preserver-spaces="true">Use</span><span data-preserver-spaces="true"> the </span><strong><span data-preserver-spaces="true">Data Layer Variables</span></strong><span data-preserver-spaces="true"> (wp_qp_action, cart_message, etc.) </span><span data-preserver-spaces="true">in the tag configuration</span><span data-preserver-spaces="true"> to add context to the interaction events.</span></li>
</ul>
<p><span data-preserver-spaces="true">This setup will allow you to track Quick View Modal interactions in your analytics platform and enrich your event data with valuable details about user </span><span data-preserver-spaces="true">behavior</span><span data-preserver-spaces="true">.</span></p>
<p><strong>Implementation Notes:</strong></p>
<p><span data-preserver-spaces="true">The Barns2 Plugin QuickView Pro event listener </span><span data-preserver-spaces="true">can be implemented</span><span data-preserver-spaces="true"> with other Tag Management Solutions (TMS). Note that when doing this, the principles outlined here, such as creating event triggers and variables, remain the same across different platforms.</span></p>
<p><strong><span data-preserver-spaces="true">GTM Recipe Template</span></strong></p>
<p><span data-preserver-spaces="true"> To speed up the setup process, you should scroll down this resource page to find a downloadable </span><strong><span data-preserver-spaces="true">GTM recipe template</span></strong><span data-preserver-spaces="true">. This recipe can be customized and used to track Quick View Modal interactions, saving you time during implementation.</span></p>
								</div>
				</div>
					</div>`,
		slug: 'barns2-plugin-quickview-pro',
		logoPath: '/logos/barns2.jpg'
	}, {
		title: 'Barns2 WooCommerce Restaurant Ordering',
		listDescription: `Track user activity on Barns2 WooCommerce Restaurant Ordering to optimize the ordering experience.`,
		code: `<script>
(function() {
// Function to push dataLayer events
function pushToDataLayer(eventName, additionalData) {
var eventData = {
event: "wcRestaurant_interactions",
wcRestaurant_action: eventName
};

// Add additional data if available
if (additionalData) {
for (var key in additionalData) {
if (additionalData.hasOwnProperty(key)) {
eventData[key] = additionalData[key];
}
}
}

// Push to the dataLayer
window.dataLayer = window.dataLayer || [];
window.dataLayer.push(eventData);
}

// Event listeners for WooCommerce Restaurant Ordering events
jQuery(document).on('wro:modal:load', function(event, response) {
pushToDataLayer('wro:modal:load', {
success: response.success,
product_data: response.product_data
});
});

jQuery(document).on('wro:modal:init', function() {
pushToDataLayer('wro:modal:init');
});

jQuery(document).on('wro:modal:open', function() {
pushToDataLayer('wro:modal:open');
});

jQuery(document).on('wro:modal:close', function() {
pushToDataLayer('wro:modal:close');
});

jQuery(document).on('wro:modal:update_price', function(event, price) {
pushToDataLayer('wro:modal:update_price', {
updated_price: price
});
});

jQuery(document).on('wro:modal:change_quantity', function(event, quantity) {
pushToDataLayer('wro:modal:change_quantity', {
quantity: quantity
});
});

jQuery(document).on('wro:modal:add_quantity', function(event, quantity) {
pushToDataLayer('wro:modal:add_quantity', {
quantity: quantity
});
});

jQuery(document).on('wro:modal:remove_quantity', function(event, quantity) {
pushToDataLayer('wro:modal:remove_quantity', {
quantity: quantity
});
});

jQuery(document).on('wro:modal:before_add_product', function(event, formData) {
pushToDataLayer('wro:modal:before_add_product', {
formData: formData
});
});

jQuery(document).on('wro:modal:add_product', function(event, response) {
pushToDataLayer('wro:modal:add_product', {
product_name: response.product_name,
quantity_added: response.quantity_added,
cart_hash: response.cart_hash
});
});

jQuery(document).on('wro:modal:add_product_complete', function() {
pushToDataLayer('wro:modal:add_product_complete');
});

jQuery(document).on('wro:modal:add_product_fail', function() {
pushToDataLayer('wro:modal:add_product_fail');
});

jQuery(document).on('wro:before_add_product', function(event, data) {
pushToDataLayer('wro:before_add_product', {
product_id: data.product_id,
quantity: data.quantity
});
});

jQuery(document).on('wro:add_product', function(event, response) {
pushToDataLayer('wro:add_product', {
product_name: response.product_name,
num_products_added: response.num_products_added,
quantity_added: response.quantity_added,
cart_hash: response.cart_hash
});
});

jQuery(document).on('wro:add_product_complete', function() {
pushToDataLayer('wro:add_product_complete');
});

jQuery(document).on('wro:add_product_fail', function() {
pushToDataLayer('wro:add_product_fail');
});
})();
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Interactions With The Barns2 WooCommerce Restaurant Ordering Form with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This section highlights how to use the <a href="https://barn2.com/wordpress-plugins/woocommerce-restaurant-ordering/" target="_blank" rel="noopener">Barns2 Plugin WooCommerce Restaurant Ordering</a> event listener </span><span data-preserver-spaces="true">in conjunction with</span><span data-preserver-spaces="true"> Google Tag Manager (GTM) to track visitor interactions with the WooCommerce Restaurant Ordering widget. This widget enables users to add meals to their cart, and by tracking these interactions, you can gain insights </span><span data-preserver-spaces="true">in</span><span data-preserver-spaces="true"> analytics platforms such as Google Analytics (GA4), Piwik Pro, Mixpanel, and more.</span></p>
<h3><span data-preserver-spaces="true">Step 1: Add the Event Listener Script to a GTM Custom HTML Tag</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Begin by creating a new tag in Google Tag Manager of the </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true"> tag type. Copy the Barns2 Plugin WooCommerce Restaurant Ordering event listener script provided below and paste it into this tag. </span><span data-preserver-spaces="true">Name the tag appropriately, such as</span><span data-preserver-spaces="true"> “<strong>cHTML – </strong></span><span data-preserver-spaces="true"><strong>WooCommerce Restaurant Event Listener</strong>,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">and set the trigger to </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> to ensure the event listener </span><span data-preserver-spaces="true">is fired</span><span data-preserver-spaces="true"> after </span><span data-preserver-spaces="true">the page content has loaded</span><span data-preserver-spaces="true">.</span></p>
<h4><span data-preserver-spaces="true">What Does the Event Listener Do?</span></h4>
<p>&nbsp;</p>
<p><span>This event listener script monitors user interactions with the WooCommerce Restaurant Ordering widget and triggers a dataLayer event named&nbsp;<strong>wcRestaurant_interactions</strong>. The script tracks various interactions, such as opening and closing the ordering modal, adding products to the cart, and updating product quantities. You can then capture and analyze these interactions in your analytics tools.</span></p>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger in GTM</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">Next, set up a custom event trigger in Google Tag Manager. Navigate to the </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> section in GTM and create a new trigger with the following settings:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">Trigger Type</span></strong><span data-preserver-spaces="true">: Custom Event</span></li>
<li><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true">: wcRestaurant_interactions</span></li>
</ul>
<p><span data-preserver-spaces="true">This trigger will fire whenever the event listener pushes the wcRestaurant_interactions event to the dataLayer.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define DataLayer Variables</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">To capture the data pushed by the event listener, </span><span data-preserver-spaces="true">you’ll</span><span data-preserver-spaces="true"> need to create the following dataLayer variables in GTM:</span></p>
<ol>
<li><strong><span data-preserver-spaces="true">wcRestaurant_action</span></strong><span data-preserver-spaces="true">: Returns the type of interaction or event that occurred, such as wro:modal</span><span data-preserver-spaces="true">:open</span><span data-preserver-spaces="true"> or wro:modal:add_product.</span></li>
</ol>
<p><span data-preserver-spaces="true">Additional variables you can define depending on your tracking needs:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">success</span></strong><span data-preserver-spaces="true">: Indicates whether the event was successful.</span></li>
<li><strong><span data-preserver-spaces="true">product_data</span></strong><span data-preserver-spaces="true">: Contains information about the product involved in the event.</span></li>
<li><strong><span data-preserver-spaces="true">updated_price</span></strong><span data-preserver-spaces="true">: Provides the updated price if </span><span data-preserver-spaces="true">the price was modified</span><span data-preserver-spaces="true">.</span></li>
<li><strong><span data-preserver-spaces="true">quantity</span></strong><span data-preserver-spaces="true">: Indicates the product quantity involved in the interaction.</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Utilize Variables</span></h3>
<p>&nbsp;</p>
<p><span data-preserver-spaces="true">With your trigger and variables set up, the next step is to create your marketing tags (e.g., Google Analytics [GA4] Event tags or Piwik Pro Event tags). Configure your tags to:</span></p>
<ol>
<li><span data-preserver-spaces="true">Attach the custom event trigger you created in Step 2.</span></li>
<li>Use the dataLayer variables defined in Step 3 to enrich your tag configuration, adding context to the tracked events. For example, in Google Analytics, you can send the wcRestaurant_action as the event name, along with additional parameters such as product data or quantity.</li>
</ol>
<p><strong>Useful Notes:</strong></p>
<p>The Barns2 Plugin WooCommerce Restaurant Ordering event listener is usable outside GTM and in other TMS; however, setting up and configuring principles remain consistent across platforms.</p>
<p>To save time when implementing, you can download a pre-configured GTM recipe template from this resource page. Customize the recipe as needed to start seamlessly tracking WooCommerce Restaurant Ordering interactions.</p>
<p>Following these steps will allow you to effectively track and analyze visitor interactions with the Barns2 Plugin WooCommerce Restaurant Ordering widget. You will gain valuable insights to enhance your marketing and user experience strategies.</p>
								</div>
				</div>
					</div>`,
		slug: 'barns2-woocommerce-restaurant-ordering',
		logoPath: '/logos/barns2.jpg'
	}, {
		title: 'Userpilot',
		listDescription: `Using this event listener with GTM, you can measure how users engage with the UserPilot widget.`,
		code: `<script>
// Initialize dataLayer if not already present
window.dataLayer = window.dataLayer || [];

// Helper function to push event data to dataLayer
function pushToDataLayer(eventName, eventDetails) {
var eventData = {
event: "userpilot_events",
userpilot_action: eventName,
userpilot_event_id: eventDetails.id || null,
userpilot_event_token: eventDetails.token || null
};

// Add step-related data for 'step' events
if (eventName === "step") {
eventData.userpilot_step = eventDetails.step || null;
eventData.userpilot_total_steps = eventDetails.totalSteps || null;
}

// Push data to the GTM dataLayer
window.dataLayer.push(eventData);
}

// Subscribe to Userpilot events
if (window.userpilot && typeof window.userpilot.on === "function") {
// Listen for 'started' event
userpilot.on("started", function (eventDetails) {
pushToDataLayer("started", eventDetails);
});

// Listen for 'completed' event
userpilot.on("completed", function (eventDetails) {
pushToDataLayer("completed", eventDetails);
});

// Listen for 'dismissed' event
userpilot.on("dismissed", function (eventDetails) {
pushToDataLayer("dismissed", eventDetails);
});

// Listen for 'step' event
userpilot.on("step", function (eventDetails) {
pushToDataLayer("step", eventDetails);
});
} else {
console.error("Userpilot is not initialized or 'on' method is unavailable.");
}
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Website Visitor's Interaction With UserPilot Feedback Widget and Onboarding Flow with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">This guide will show you how to use the <a href="https://userpilot.com/" target="_blank" rel="noopener">Userpilot</a> event listener script and Google Tag Manager (GTM) to track website visitors’ interactions with the Userpilot feedback widget and in-app onboarding flows. By implementing this setup, you can capture detailed interaction data in analytics tools such as Google Analytics (GA4), Piwik Pro, and others.</span></p>
<h3><span data-preserver-spaces="true">Step 1: Add the Userpilot Event Listener Script in GTM</span></h3>
<p><span data-preserver-spaces="true">The first step is to copy the provided Userpilot event listener script and add it to a new custom HTML tag in Google Tag Manager.</span></p>
<ol>
<li><span data-preserver-spaces="true">Log in to your GTM workspace and create a new tag.</span></li>
<li><span data-preserver-spaces="true">Select </span><strong><span data-preserver-spaces="true">Custom HTML</span></strong><span data-preserver-spaces="true"> as the tag type.</span></li>
<li><span data-preserver-spaces="true">Paste the Userpilot event listener script into the HTML field.</span></li>
<li><span data-preserver-spaces="true">Name your tag (e.g., “Userpilot Event Listener”).</span></li>
<li><span data-preserver-spaces="true">Use the </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> trigger type to ensure the script fires after the page’s DOM has fully loaded.</span></li>
</ol>
<p><span data-preserver-spaces="true">💡 </span><strong><span data-preserver-spaces="true">Pro Tip</span></strong><span data-preserver-spaces="true">: Firing on </span><strong><span data-preserver-spaces="true">DOM Ready</span></strong><span data-preserver-spaces="true"> ensures the Userpilot widget </span><span data-preserver-spaces="true">is initialized</span><span data-preserver-spaces="true"> before the event listener activates.</span></p>
<h4><span data-preserver-spaces="true">What Does the Event Listener Script Do?</span></h4>
<p><span data-preserver-spaces="true">This script listens for various Userpilot events, such as onboarding steps, feedback widget actions, and dismissals. When an interaction occurs, it triggers a dataLayer event named “userpilot_events</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> with the following visitor interaction details:</span></p>
<ul>
<li><strong><span data-preserver-spaces="true">userpilot_action</span></strong><span data-preserver-spaces="true">: Type of interaction or event (e.g., “started,</span><span data-preserver-spaces="true">” </span><span data-preserver-spaces="true">“completed,</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> “dismissed,</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> or “step”).</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_event_id</span></strong><span data-preserver-spaces="true">: A unique ID for the event.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_event_token</span></strong><span data-preserver-spaces="true">: A token for the event.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_step</span></strong><span data-preserver-spaces="true"> and </span><strong><span data-preserver-spaces="true">userpilot_total_steps</span></strong><span data-preserver-spaces="true">: (For “step</span><span data-preserver-spaces="true">“</span><span data-preserver-spaces="true"> events) The current step and the total number of steps.</span></li>
</ul>
<h3><span data-preserver-spaces="true">Step 2: Create a Custom Event Trigger</span></h3>
<p><span data-preserver-spaces="true">To track these interactions, create a custom event trigger in GTM:</span></p>
<ol>
<li><span data-preserver-spaces="true">Navigate to </span><strong><span data-preserver-spaces="true">Triggers</span></strong><span data-preserver-spaces="true"> in your GTM workspace.</span></li>
<li><span data-preserver-spaces="true">Click </span><strong><span data-preserver-spaces="true">New</span></strong><span data-preserver-spaces="true"> and select </span><strong><span data-preserver-spaces="true">Custom Event</span></strong><span data-preserver-spaces="true"> as the trigger type.</span></li>
<li><span data-preserver-spaces="true">Name your trigger (e.g., “Userpilot Event Trigger”).</span></li>
<li><span data-preserver-spaces="true">Set the </span><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true"> to “userpilot_events”.</span></li>
<li><span data-preserver-spaces="true">Save your trigger.</span></li>
</ol>
<p><span data-preserver-spaces="true">This trigger will activate for all userpilot_events captured by the event listener.</span></p>
<h3><span data-preserver-spaces="true">Step 3: Define Data Layer Variables</span></h3>
<p><span data-preserver-spaces="true">Next, create the necessary variables in GTM to capture and utilize data from the dataLayer:</span></p>
<ol>
<li><span data-preserver-spaces="true">Navigate to </span><strong><span data-preserver-spaces="true">Variables</span></strong><span data-preserver-spaces="true"> in your GTM workspace.</span></li>
<li><span data-preserver-spaces="true">Create a </span><strong><span data-preserver-spaces="true">Data Layer Variable</span></strong><span data-preserver-spaces="true"> for each key in the event data:</span>
<ul>
<li><strong><span data-preserver-spaces="true">userpilot_action</span></strong><span data-preserver-spaces="true">: Indicates the type of Userpilot interaction/event.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_event_id</span></strong><span data-preserver-spaces="true">: Provides the unique ID of the Userpilot event.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_event_token</span></strong><span data-preserver-spaces="true">: Contains the event token for tracking.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_step</span></strong><span data-preserver-spaces="true">: (Optional) Tracks the current onboarding step.</span></li>
<li><strong><span data-preserver-spaces="true">userpilot_total_steps</span></strong><span data-preserver-spaces="true">: (Optional) Tracks the total steps in the onboarding flow.</span></li>
</ul>
</li>
<li><span data-preserver-spaces="true">Save each variable for use in your tag configurations.</span></li>
</ol>
<h3><span data-preserver-spaces="true">Step 4: Create Marketing Tags and Pixels</span></h3>
<p><span data-preserver-spaces="true">After creating triggers and variables, set up your marketing tags or pixels to utilize this data.</span></p>
<ol>
<li><span data-preserver-spaces="true">Create new tags for platforms like Google Analytics (GA4), Piwik Pro, or Facebook Pixel.</span></li>
<li><span data-preserver-spaces="true">Attach the </span><strong><span data-preserver-spaces="true">Userpilot Event Trigger</span></strong><span data-preserver-spaces="true"> created in Step 2.</span></li>
<li><span data-preserver-spaces="true">Use the </span><strong><span data-preserver-spaces="true">Data Layer Variables</span></strong><span data-preserver-spaces="true"> to add context to the events tracked. For example:</span>
<ul>
<li><span data-preserver-spaces="true">Set </span><strong><span data-preserver-spaces="true">Event Name</span></strong><span data-preserver-spaces="true"> to userpilot_action in your GA4 event configuration.</span></li>
<li><span data-preserver-spaces="true">Include additional information like userpilot_step and userpilot_total_steps in the event parameters.</span></li>
</ul>
</li>
</ol>
<p><span data-preserver-spaces="true">This</span><span data-preserver-spaces="true"> allows you to monitor onboarding flow and feedback widget interactions in your analytics tools, enhancing your insights.</span></p>
<p><strong>Notes:</strong></p>
<p><span data-preserver-spaces="true">The Userpilot event listener is <b>usable</b></span><span data-preserver-spaces="true">&nbsp;with any Tag Management Solution (TMS). However, the implementation principles remain consistent across platforms.</span></p>
<p><span data-preserver-spaces="true">To simplify your setup process, scroll down this page to download a customizable GTM recipe template for tracking the </span><span data-preserver-spaces="true">Userpilot</span><span data-preserver-spaces="true"> feedback widget and onboarding flow interactions.</span></p>
<p>Following these steps will give you a robust setup for tracking and analyzing Userpilot interactions on your website.</p>
								</div>
				</div>
					</div>`,
		slug: 'userpilot',
		logoPath: '/logos/userpilot.jpg'
	}, {
		title: 'Survicate',
		listDescription: `An event listener that makes it easy to track user interactions with the SnapEngage widget on your website.`,
		code: ``,
		description: ``,
		slug: 'survicate',
		logoPath: '/logos/survicate.jpg'
	}, {
		title: 'FOMO.com',
		listDescription: `Use this event listener to track FOMO campaign interactions/conversions in the analytics suites of your choice.`,
		code: ``,
		description: ``,
		slug: 'fomo.com',
		logoPath: '/logos/fomo.com.jpg'
	}, {
		title: 'Web Engage',
		listDescription: `You can measure conversion and user interactions with Web Engage in your analytics tools.`,
		code: `<script>
// when a visitor allows push notifications and the subscription completes successfully
webengage.onReady(function () {
webengage.webpush.onSubscribe(function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'subscribe to push notifications'
});
});
}); 
// when the on-site notification is opened
webengage.notification.onOpen(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "notification",
'webEngageAction': 'opened a notification',
'notificationID': data.notificationId,
'webEngageEventData': data
});
});
// when the on-site notification is closed
webengage.notification.onOpen(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "notification",
'webEngageAction': 'closed a notification',
'notificationID': data.notificationId,
'webEngageEventData': data
});
}); 
// when the on-site notification is closed
webengage.notification.onClick(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "notification",
'webEngageAction': 'clicked a notification',
'notificationID': data.notificationId,
'webEngageEventData': data
});
}); 
// when the on-site survey is opened
webengage.survey.onOpen(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "survey",
'webEngageAction': 'survey is opened',
'surveyID': data.surveyId,
'webEngageEventData': data
});
}); 
// when the on-site survey is closed
webengage.survey.onClose(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "survey",
'webEngageAction': 'survey is closed',
'surveyID': data.surveyId,
'webEngageEventData': data
});
}); 
// when the on-site survey question is answered
webengage.survey.onSubmit(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "survey",
'webEngageAction': 'answered survey question',
'surveyID': data.surveyId,
'webEngageEventData': data
});
});
// when the on-site survey is completed
webengage.survey.onComplete(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "survey",
'webEngageAction': 'survey is completed',
'surveyID': data.surveyId,
'webEngageEventData': data
});
});
// when the on-site feedback widget is opened (Deprecated)
webengage.feedback.onOpen(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "feedback",
'webEngageAction': 'opened feedback widget',
'webEngageEventData': data
});
});
// when the on-site feedback widget is closed (Deprecated)
webengage.feedback.onClose(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "feedback",
'webEngageAction': 'closed feedback widget',
'webEngageEventData': data
});
});
// when the on-site feedback is submitted (Deprecated)
webengage.feedback.onSubmit(function (data) {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "feedback",
'webEngageAction': 'submitted a feedback',
'webEngageEventData': data
});
});
// when browser prompts the notification permission to the user
webengage.options('webpush.onWindowViewed', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'web push notification permission prompt viewed'
});
});
// when the user grants permission for Web Push
webengage.options('webpush.onWindowAllowed', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'web push notification permission granted'
});
});
// when the user denies permission for Web Push
webengage.options('webpush.onWindowDenied', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'web push notification permission denied'
});
});
// when the user grants permission for Web Push for the first time
webengage.options('webpush.onPushRegistered', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'web push notification permission granted first time'
});
});
// when the user revokes permission for Web Push after having granted it before
webengage.options('webpush.onPushUnregistered', function () {
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'webengage_event',
'webEngageType': "web push",
'webEngageAction': 'web push notification permission revoked'
});
});
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Web Engage Interactions (web push, notifications, survey and feedback) with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">Web Engage is a user retention tool that offers a variety of tools (feedback, on-site notifications, survey and web push). Using the Web Engage event listener and the help of Google Tag Manager, you’ll be able to track user interactions with these tools and have the data in your analytics stacks (Google Analytics, Piwik Pro, Mixpanel, etc.).</span></p>
<p><span data-preserver-spaces="true">The data gives you valuable insights into what impact user interactions with Web Engage feedback, survey, web push and on-site notifications tools have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">In this implementation, we’ll be using Google Tag Manager, and the Web Engage event listener script on this page.</span></p>
<p><span data-preserver-spaces="true">Your first step will be to copy, and paste the event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended) or Window Loaded.</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the Web Engage script through Google Tag Manager, please use the DOM-ready trigger instead or Window Loaded if the interaction with these tools isn’t pushed to the dataLayer.</span></p>
<p><span data-preserver-spaces="true">Your next step should be creating a custom event with the name&nbsp;</span><strong><span data-preserver-spaces="true">[webengage_event]</span></strong><span data-preserver-spaces="true">, which happens on all Web Engage activity.</span></p>
<p><span data-preserver-spaces="true">In the next step, you’ll create a DataLayer variable with the key </span><strong><span data-preserver-spaces="true">[webEngageAction]</span></strong><span data-preserver-spaces="true">&nbsp;should be created for you to capture in GTM, the Tidio chat event type.</span></p>
<p><strong><span data-preserver-spaces="true">[webEngageAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li>subscribe to push notifications</li>
<li>closed a notification</li>
<li>opened a notification</li>
<li>clicked a notification</li>
<li>survey is opened</li>
<li>survey is closed</li>
<li>answered survey question</li>
<li>survey is completed</li>
<li>opened feedback widget</li>
<li>closed feedback widget</li>
<li>submitted a feedback</li>
<li>web push notification permission prompt viewed</li>
<li>web push notification permission granted</li>
<li>web push notification permission denied</li>
<li>web push notification permission granted first time</li>
<li>web push notification permission revoked</li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[webEngageAction]</span></strong><span data-preserver-spaces="true"> dataLayer variable as an event parameter or for streamlining your trigger to fire on specific Web Engage events.</span></p>
<p>To understand which of the Web Engage tools the user just interacted with you’ll have to create a DataLayer variable with the key set to <strong>[webEngageType]</strong>, it returns one of the following values;</p>
<ul>
<li>feedback</li>
<li>survey</li>
<li>web push</li>
<li>notification</li>
</ul>
<p>Depending on what Web Engage feature the user interacted with.</p>
<p>Also the following DataLayer key, gives more context on the DataLayer events emitted by the event listener.</p>
<p><strong>[notificationID]</strong> – available on only for site notifications interactions, and it’s the notification ID</p>
<p><strong>[surveyID]</strong> – available on only for site survey interactions, and it’s the survey ID</p>
<p><strong>[webEngageEventData]</strong> – this is not available in all Web Engage activity, but it returns more information of that event that happened in object format.</p>
<p>To send the data of these interactions to your measurement stacks, you’ve to use add your marketing tags, attach the trigger and GTM variables you created to push more information about each Web Engage interaction.</p>
<p>Ensure to debug using the GTM preview mode (Google Tag Assistant), before publishing your implementation.</p>
								</div>
				</div>
					</div>`,
		slug: 'webengage',
		logoPath: '/logos/webengage.jpg'
	}, {
		title: 'Social Intents',
		listDescription: `Social intents make talking to your customers easy, and this event listener makes tracking these interactions easy.`,
		code: `<script>
function onSIApiReady() 
{
//Will trigger when chat window is minimized
SI_API.onChatClosed = function()
{
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'socialIntents_Action',
'chatAction': 'chat window closed'
});
//Will trigger when chat window appears
SI_API.onChatOpened = function()
{
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'socialIntents_Action',
'chatAction': 'chat window opened'
});
};
//Will trigger when chat window is minimized
SI_API.onChatEnded = function()
{
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
'event': 'socialIntents_Action',
'chatAction': 'chat session ended'
});
};
};
};
</script>`,
		description: `<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-45aac3af elementor-widget elementor-widget-heading" data-id="45aac3af" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
					<h2 class="elementor-heading-title elementor-size-default">How to track  Social Intents Chat Interaction with google tag manager</h2>				</div>
				</div>
				<div class="elementor-element elementor-element-64c7280a elementor-widget elementor-widget-text-editor" data-id="64c7280a" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
									<p><span data-preserver-spaces="true">User interactions with your Social Intents Livechat software can be tracked into your Analytics stacks (Google Analytics, Piwik Pro, Mixpanel, etc.) using Google Tag Manager and the Social Intent event listener.</span></p>
<p><span data-preserver-spaces="true">With this data in your measurement platform, you’ll have valuable insights into what impact these interactions have on your marketing funnel, conversions, website engagement metrics, and other business KPIs.</span></p>
<p><span data-preserver-spaces="true">Your first step will be to copy, and paste the Social Intents event listener script in the GTM custom HTML tag and fire it on pageview or DOM ready (always recommended).</span></p>
<p><strong><span data-preserver-spaces="true">PRO TIP:</span></strong><span data-preserver-spaces="true"> if you installed the Social Intents script through Google Tag Manager, please use the DOM-ready or Window Loaded trigger instead.</span></p>
<p><span data-preserver-spaces="true">In the next step you should create the <strong>[socialIntents_Action] </strong>custom events, which is triggered on every interaction with the embedded livechat widget.</span></p>
<p><span data-preserver-spaces="true">DataLayer variable with the key&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> should be created for you to capture in GTM, the Social Intents event type.</span></p>
<p><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true">&nbsp;returns the following event description;</span></p>
<ul>
<li>chat window closed</li>
<li>chat window opened</li>
<li>chat session ended</li>
</ul>
<p><span data-preserver-spaces="true">You can use the&nbsp;</span><strong><span data-preserver-spaces="true">[chatAction]</span></strong><span data-preserver-spaces="true"> dataLayer variable as an event parameter or for streamlining your trigger to fire on specific Social Intents chat interactions.</span></p>
<p>To complete the implementation, you’ll need to add your marketing tags, attach the Social Intents trigger <span data-preserver-spaces="true"><strong>[socialIntents_Action]</strong> to it<strong>, </strong></span>and use the dataLayer variables you created to push more information about each interaction.</p>
								</div>
				</div>
					</div>`,
		slug: 'social-intents',
		logoPath: '/logos/social-intents.jpg'
	}, {
		title: 'Chili Piper',
		listDescription: `Measure Chili Piper booking steps and successful bookings a conversion using this event listener.`,
		code: ``,
		description: ``,
		slug: 'chili-piper',
		logoPath: '/logos/chili-piper.jpg'
	}
];
