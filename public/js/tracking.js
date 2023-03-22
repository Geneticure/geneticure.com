/* eslint-disable */
// This file is just for the copy-pasted boilerplate from Facebook/Google. Anything requiring IDs or custom logic is in src/js/tracking.ts
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag(`js`, new Date());

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=!0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');

adroll_adv_id = "UMQMWZDVWJCRHNDUEGS7UP";
adroll_pix_id = "QY3VEG75RVBLBA4QV27VCY";
adroll_version = "2.0";

(function(w, d, e, o, a) {
		w.__adroll_loaded = true;
		w.adroll = w.adroll || [];
		w.adroll.f = [ 'setProperties', 'identify', 'track' ];
		var roundtripUrl = "https://s.adroll.com/j/" + adroll_adv_id
						+ "/roundtrip.js";
		for (a = 0; a < w.adroll.f.length; a++) {
				w.adroll[w.adroll.f[a]] = w.adroll[w.adroll.f[a]] || (function(n) {
						return function() {
								w.adroll.push([ n, arguments ])
						}
				})(w.adroll.f[a])
		}

		e = d.createElement('script');
		o = d.getElementsByTagName('script')[0];
		e.async = 1;
		e.src = roundtripUrl;
		o.parentNode.insertBefore(e, o);
})(window, document);
adroll.track("pageView");

!function(){var e="rest.happierleads.com/v3/script?clientId=7iVLCPidio96GwdXUQzggF&version=4.0.0", t=document.createElement("script");window.location.protocol.split(":")[0]; t.src="https://"+e;var c=document.getElementsByTagName("script")[0]; t.onload = function(){ new Happierleads.default }; c.parentNode.insertBefore(t,c)}();
