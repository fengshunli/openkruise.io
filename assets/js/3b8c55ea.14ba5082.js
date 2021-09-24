"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[3217],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,g=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={title:"Installation"},d=void 0,p={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Although OpenKruise now can work with Kubernetes version >= 1.13, we strongly recommend you to use Kruise with Kubernetes version >= 1.16.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/installation.md",tags:[],version:"current",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1632471441,formattedLastUpdatedAt:"9/24/2021",frontMatter:{title:"Installation"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/"},next:{title:"Architecture",permalink:"/docs/next/core-concepts/architecture"}},m=[{value:"Install with helm charts",id:"install-with-helm-charts",children:[]},{value:"Upgrade with helm charts",id:"upgrade-with-helm-charts",children:[]},{value:"Options",id:"options",children:[{value:"Optional: chart parameters",id:"optional-chart-parameters",children:[]},{value:"Optional: feature-gate",id:"optional-feature-gate",children:[]},{value:"Optional: the local image for China",id:"optional-the-local-image-for-china",children:[]}]},{value:"Uninstall",id:"uninstall",children:[]}],u={toc:m};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Although OpenKruise now can work with Kubernetes version >= ",(0,l.kt)("inlineCode",{parentName:"p"},"1.13"),", we strongly recommend you to use Kruise with ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes version >= 1.16"),". "),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"For Kubernetes 1.13 and 1.14, users must enable ",(0,l.kt)("inlineCode",{parentName:"li"},"CustomResourceWebhookConversion")," feature-gate in kube-apiserver before install or upgrade Kruise."),(0,l.kt)("li",{parentName:"ol"},"Currently Kruise can not be installed into Kubernetes 1.22, for it has dropped v1beta1 version of some resources like CRD/WebhookConfiguration.\nThe comming Kruise v1.0 will fix it and do not support Kubernetes version lower than 1.16 any more.")),(0,l.kt)("h2",{id:"install-with-helm-charts"},"Install with helm charts"),(0,l.kt)("p",null,"Kruise can be simply installed by helm v3.1+, which is a simple command-line tool and you can get it from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"here"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Kubernetes 1.13 and 1.14\nhelm install kruise https://github.com/openkruise/kruise/releases/download/v0.10.0/kruise-chart.tgz --disable-openapi-validation\n\n# Kubernetes 1.15 and newer versions\nhelm install kruise https://github.com/openkruise/kruise/releases/download/v0.10.0/kruise-chart.tgz\n")),(0,l.kt)("h2",{id:"upgrade-with-helm-charts"},"Upgrade with helm charts"),(0,l.kt)("p",null,"If you are using Kruise with an old version, it is recommended that you should upgrade to the latest version for safety and more features:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Kubernetes 1.13 and 1.14\nhelm upgrade kruise https://github.com/openkruise/kruise/releases/download/v0.10.0/kruise-chart.tgz --disable-openapi-validation\n\n# Kubernetes 1.15 and newer versions\nhelm upgrade kruise https://github.com/openkruise/kruise/releases/download/v0.10.0/kruise-chart.tgz\n")),(0,l.kt)("p",null,"Note that:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Before upgrade, you ",(0,l.kt)("strong",{parentName:"li"},"must")," firstly read the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/openkruise/kruise/blob/master/CHANGELOG.md"},"Change Log"),"\nto make sure that you have understand the breaking changes in the new version."),(0,l.kt)("li",{parentName:"ol"},"If you want to drop the chart parameters you configured for the old release or set some new parameters,\nit is recommended to add ",(0,l.kt)("inlineCode",{parentName:"li"},"--reset-values")," flag in ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")," command.")),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"Note that installing this chart directly means it will use the default template values for Kruise."),(0,l.kt)("p",null,"You may have to set your specific configurations if it is deployed into a production cluster, or you want to configure feature-gates."),(0,l.kt)("h3",{id:"optional-chart-parameters"},"Optional: chart parameters"),(0,l.kt)("p",null,"The following table lists the configurable parameters of the chart and their default values."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"featureGates")),(0,l.kt)("td",{parentName:"tr",align:null},"Feature gates for Kruise, empty string means all by default"),(0,l.kt)("td",{parentName:"tr",align:null},"``")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"installation.namespace")),(0,l.kt)("td",{parentName:"tr",align:null},"namespace for kruise installation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"kruise-system"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that kruise-manager printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.replicas")),(0,l.kt)("td",{parentName:"tr",align:null},"Replicas of kruise-controller-manager deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.repository")),(0,l.kt)("td",{parentName:"tr",align:null},"Repository for kruise-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"openkruise/kruise-manager"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.image.tag")),(0,l.kt)("td",{parentName:"tr",align:null},"Tag for kruise-manager image"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"v0.10.0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"100m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-manager container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"256Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.metrics.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"8080"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.webhook.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of webhook served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeAffinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Node affinity policy for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.nodeSelector")),(0,l.kt)("td",{parentName:"tr",align:null},"Node labels for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"manager.tolerations")),(0,l.kt)("td",{parentName:"tr",align:null},"Tolerations for kruise-manager pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.log.level")),(0,l.kt)("td",{parentName:"tr",align:null},"Log level that kruise-daemon printed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.port")),(0,l.kt)("td",{parentName:"tr",align:null},"Port of metrics and healthz that kruise-daemon served"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10221"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource limit of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50m"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.limits.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource limit of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"128Mi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.cpu")),(0,l.kt)("td",{parentName:"tr",align:null},"CPU resource request of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.resources.requests.memory")),(0,l.kt)("td",{parentName:"tr",align:null},"Memory resource request of kruise-daemon container"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.affinity")),(0,l.kt)("td",{parentName:"tr",align:null},"Affinity policy for kruise-daemon pod"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"daemon.socketLocation")),(0,l.kt)("td",{parentName:"tr",align:null},"Location of the container manager control socket"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/var/run"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.failurePolicy.pods")),(0,l.kt)("td",{parentName:"tr",align:null},"The failurePolicy for pods in mutating webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Ignore"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"webhookConfiguration.timeoutSeconds")),(0,l.kt)("td",{parentName:"tr",align:null},"The timeoutSeconds for all webhook configuration"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"30"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"crds.managed")),(0,l.kt)("td",{parentName:"tr",align:null},"Kruise will not install CRDs with chart if this is false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("p",null,"Specify each parameter using the ",(0,l.kt)("inlineCode",{parentName:"p"},"--set key=value[,key=value]")," argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,l.kt)("h3",{id:"optional-feature-gate"},"Optional: feature-gate"),(0,l.kt)("p",null,"Feature-gate controls some influential features in Kruise:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect (if closed)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodWebhook")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to open a webhook for Pod ",(0,l.kt)("strong",{parentName:"td"},"create")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"SidecarSet/KruisePodReadinessGate disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruiseDaemon")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to deploy ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," DaemonSet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"ImagePulling/ContainerRecreateRequest disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DaemonWatchingPod")),(0,l.kt)("td",{parentName:"tr",align:null},"Should each ",(0,l.kt)("inlineCode",{parentName:"td"},"kruise-daemon")," watch pods on the same node"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"For in-place update with same imageID or env from labels/annotations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetShortHash")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller only set revision hash name to pod label"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet name can not be longer than 54 characters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KruisePodReadinessGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables Kruise webhook to inject 'KruisePodReady' readiness-gate to all Pods during creation"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"The readiness-gate will only be injected to Pods created by Kruise workloads")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PreDownloadImageForInPlaceUpdate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller to create ImagePullJobs to pre-download images for in-place update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No image pre-download for in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CloneSetPartitionRollback")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables CloneSet controller to rollback Pods to currentRevision when number of updateRevision pods is bigger than (replicas - partition)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"CloneSet will only update Pods to updateRevision")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ResourcesDeletionProtection")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables protection for resources deletion"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for resources deletion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TemplateNoDefaults")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to disable defaults injection for pod/pvc template in workloads"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Should not close this feature if it has open")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetDeleteGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables PodUnavailableBudget for pod deletion, eviction"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for pod deletion, eviction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PodUnavailableBudgetUpdateGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables PodUnavailableBudget for pod.Spec update"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"No protection for in-place update")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"WorkloadSpread")),(0,l.kt)("td",{parentName:"tr",align:null},"Enables WorkloadSpread to manage multi-domain and elastic deploy"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"WorkloadSpread disabled")))),(0,l.kt)("p",null,"If you want to configure the feature-gate, just set the parameter when install or upgrade. Such as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm install kruise https://... --set featureGates="ResourcesDeletionProtection=true\\,PreDownloadImageForInPlaceUpdate=true"\n')),(0,l.kt)("p",null,"If you want to enable all feature-gates, set the parameter as ",(0,l.kt)("inlineCode",{parentName:"p"},"featureGates=AllAlpha=true"),"."),(0,l.kt)("h3",{id:"optional-the-local-image-for-china"},"Optional: the local image for China"),(0,l.kt)("p",null,"If you are in China and have problem to pull image from official DockerHub, you can use the registry hosted on Alibaba Cloud:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm install kruise https://... --set  manager.image.repository=openkruise-registry.cn-hangzhou.cr.aliyuncs.com/openkruise/kruise-manager\n")),(0,l.kt)("h2",{id:"uninstall"},"Uninstall"),(0,l.kt)("p",null,"Note that this will lead to all resources created by Kruise, including webhook configurations, services, namespace, CRDs, CR instances and Pods managed by Kruise controller, to be deleted!"),(0,l.kt)("p",null,"Please do this ONLY when you fully understand the consequence."),(0,l.kt)("p",null,"To uninstall kruise if it is installed with helm charts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ helm uninstall kruise\nrelease "kruise" uninstalled\n')))}s.isMDXComponent=!0}}]);