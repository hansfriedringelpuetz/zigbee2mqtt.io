"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[63382],{45477:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>a,data:()=>c});var n=i(6254);const o={},a=(0,i(89596).A)(o,[["render",function(e,t){const i=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[11]||(t[11]=(0,n.Lk)("h1",{id:"sonoff-snzb-06p",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#sonoff-snzb-06p"},[(0,n.Lk)("span",null,"SONOFF SNZB-06P")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SNZB-06P")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("SONOFF")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee occupancy sensor")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"occupancy, occupancy_timeout, occupancy_sensitivity, illumination, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SNZB-06P.png",alt:"SONOFF SNZB-06P"})])],-1))])]),t[12]||(t[12]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Firmware 1.0.3 can be misbehaving, as of December 2023 upgrade to 1.0.5 is recommended.</p><p>Additional settings currently not exposed in Z2M can be adjusted via the Dev console:</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity"><span>Sensitivity</span></a></h3><p>Select the msOccupancySensing Cluster, ultrasonicUToOThreshold Attribute is the sensitivity setting.</p><p>1 represents low sensitivity with a detection distance of 2.5m.<br> 2 represents medium sensitivity with a detection distance of 3.5m.<br> 3 represents high sensitivity with a detection distance of 4m.</p><h3 id="detection-duration" tabindex="-1"><a class="header-anchor" href="#detection-duration"><span>Detection duration</span></a></h3><p>Select the msOccupancySensing Cluster, ultrasonicOToUDelay is the detection duration setting.</p><p>On firmware versions lower than 1.0.5, the shortest detection duration is 30 (seconds), otherwise, the sensor will stay permanently on detected status.</p><p>Firmware version 1.0.5 and above allows setting the shortest detection duration to 15 (seconds).</p><p><a href="https://sonoff.tech/product-review/tutorial/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide/" target="_blank" rel="noopener noreferrer">Source - Sonoff documentation</a></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',12)),(0,n.Lk)("p",null,[t[8]||(t[8]=(0,n.eW)("This device supports OTA updates, for more information see ")),(0,n.bF)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,n.eW)("."))]),t[13]||(t[13]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[10]||(t[10]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,n.Fv)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric"><span>Occupancy timeout (numeric)</span></a></h3><p>Unoccupied to occupied delay. Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>15</code> and the maximum value is <code>65535</code>.</p><h3 id="occupancy-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#occupancy-sensitivity-enum"><span>Occupancy sensitivity (enum)</span></a></h3><p>Sensitivity of human presence detection. Value can be found in the published state on the <code>occupancy_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="illumination-enum" tabindex="-1"><a class="header-anchor" href="#illumination-enum"><span>Illumination (enum)</span></a></h3><p>Only updated when occupancy is detected. Value can be found in the published state on the <code>illumination</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>dim</code>, <code>bright</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12))])}]]),c=JSON.parse('{"path":"/devices/SNZB-06P.html","title":"SONOFF SNZB-06P control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF SNZB-06P control via MQTT","description":"Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Detection duration","slug":"detection-duration","link":"#detection-duration","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Occupancy timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Occupancy sensitivity (enum)","slug":"occupancy-sensitivity-enum","link":"#occupancy-sensitivity-enum","children":[]},{"level":3,"title":"Illumination (enum)","slug":"illumination-enum","link":"#illumination-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1736539885000},"filePathRelative":"devices/SNZB-06P.md"}')}}]);