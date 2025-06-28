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
];

export const listenerCardsVideo: ListenerCardProps[] = [
];

export const listenerCardsPopup: ListenerCardProps[] = [
];

export const listenerCardsOther: ListenerCardProps[] = [
];
