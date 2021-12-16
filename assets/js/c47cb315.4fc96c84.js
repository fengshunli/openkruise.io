"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[2796],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={slug:"openkruise-1.0",title:"OpenKruise v1.0, Reaching New Peaks of application automation",authors:["FillZpp"],tags:["release"]},s=void 0,p={permalink:"/blog/openkruise-1.0",editUrl:"https://github.com/openkruise/openkruise.io/tree/master/blog/blog/2021-12-13-release-1.0.md",source:"@site/blog/2021-12-13-release-1.0.md",title:"OpenKruise v1.0, Reaching New Peaks of application automation",description:"We\u2019re pleased to announce the release of Kubernetes 1.0, which is a CNCF Sandbox level project.",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:6.505,truncated:!1,authors:[{name:"Siyu Wang",title:"Maintainer of OpenKruise",url:"https://github.com/FillZpp",imageURL:"https://github.com/FillZpp.png",key:"FillZpp"}],nextItem:{title:"OpenKruise 0.10.0, New features of multi-domain management, application protection",permalink:"/blog/openkruise-0.10.0"}},u={authorsImageUrls:[void 0]},c=[{value:"What&#39;s new?",id:"whats-new",children:[{value:"1. InPlace Update for environments",id:"1-inplace-update-for-environments",children:[],level:3},{value:"2. Distribute resources over multiple namespaces",id:"2-distribute-resources-over-multiple-namespaces",children:[],level:3},{value:"3. Container launch priority",id:"3-container-launch-priority",children:[],level:3},{value:"4. <code>kubectl-kruise</code> commandline tool",id:"4-kubectl-kruise-commandline-tool",children:[],level:3},{value:"5. Other changes",id:"5-other-changes",children:[],level:3}],level:2},{value:"Get Involved",id:"get-involved",children:[],level:2}],d={toc:c};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We\u2019re pleased to announce the release of Kubernetes 1.0, which is a CNCF Sandbox level project."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://openkruise.io"},"OpenKruise")," is an extended component suite for Kubernetes, which mainly focuses on application automations, such as deployment, upgrade, ops and availability protection. Mostly features provided by OpenKruise are built primarily based on CRD extensions. They can work in pure Kubernetes clusters without any other dependences."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"openkruise-features|center|450x400",src:n(4843).Z})),(0,o.kt)("p",null,"Overall, OpenKruise currently provides features in these areas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application workloads"),": Enhanced strategies of deploy and upgrade for stateless/stateful/daemon applications, such as in-place update, canary/flowing upgrade."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sidecar container management"),": supports to define sidecar container alone, which means it can inject sidecar containers, upgrade them with no effect on application containers and even hot upgrade."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enhanced operations"),": such as restart containers in-place, pre-download images on specific nodes, keep containers launch priority in a Pod, distribute one resource to multiple namespaces."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Application availability protection"),": protect availability for applications that deployed in Kubernetes.")),(0,o.kt)("h2",{id:"whats-new"},"What's new?"),(0,o.kt)("h3",{id:"1-inplace-update-for-environments"},"1. InPlace Update for environments"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/FillZpp"},"@FillZpp"))),(0,o.kt)("p",null,"OpenKruise has supported ",(0,o.kt)("strong",{parentName:"p"},"InPlace Update")," since very early version, mostly for workloads like CloneSet and Advanced StatefulSet. Comparing to recreate Pods during upgrade, in-place update only has to modify the fields in existing Pods."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"inplace-update-comparation|center|450x400",src:n(9347).Z})),(0,o.kt)("p",null,"As the picture shows above, we only modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," field in Pod during in-place update. So that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid additional cost of ",(0,o.kt)("em",{parentName:"li"},"scheduling"),", ",(0,o.kt)("em",{parentName:"li"},"allocating IP"),", ",(0,o.kt)("em",{parentName:"li"},"allocating and mounting volumes"),"."),(0,o.kt)("li",{parentName:"ul"},"Faster image pulling, because of we can re-use most of image layers pulled by the old image and only to pull several new layers."),(0,o.kt)("li",{parentName:"ul"},"When a container is in-place updating, the other containers in Pod will not be affected and remain running.")),(0,o.kt)("p",null,"However, OpenKruise only supports to in-place update ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," field in Pod and has to recreate Pods if other fields need to update. All the way through, more and more users hope OpenKruise could support in-place update more fields such as ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," -- which is hard to implement, for it is limited by kube-apiserver."),(0,o.kt)("p",null,"After our unremitting efforts, OpenKruise finally support in-place update environments via Downward API since version v1.0. Take the CloneSet YAML below as an example, user has to set the configuration in annotation and write a env from it. After that, he just needs to modify the annotation value when changing the configuration. Kruise will restart all containers with env from the annotation in such Pod to enable the new configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  ...\nspec:\n  replicas: 1\n  template:\n    metadata:\n      annotations:\n        app-config: \"... the real env value ...\"\n    spec:\n      containers:\n      - name: app\n        env:\n        - name: APP_CONFIG\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.annotations['app-config']\n  updateStrategy:\n    type: InPlaceIfPossible\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"At the same time, we have removed the limit of ",(0,o.kt)("inlineCode",{parentName:"em"},"imageID")," for in-place update, which means you can update a new image with the same imageID to the old image.")),(0,o.kt)("p",null,"For more details please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/inplace-update"},"documentation"),"."),(0,o.kt)("h3",{id:"2-distribute-resources-over-multiple-namespaces"},"2. Distribute resources over multiple namespaces"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/veophi"},"@veophi"))),(0,o.kt)("p",null,"For the scenario, where the namespace-scoped resources such as Secret and ConfigMap need to be distributed or synchronized to different namespaces, the native k8s currently only supports manual distribution and synchronization by users one-by-one, which is very inconvenient. "),(0,o.kt)("p",null,"Typical examples: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When users want to use the imagePullSecrets capability of SidecarSet, they must repeatedly create corresponding Secrets in relevant namespaces, and ensure the correctness and consistency of these Secret configurations;"),(0,o.kt)("li",{parentName:"ul"},"When users want to configure some common environment variables, they probably need to distribute ConfigMaps to multiple namespaces, and the subsequent modifications of these ConfigMaps might require synchronization among these namespaces.")),(0,o.kt)("p",null,"Therefore, in the face of these scenarios that require the resource distribution and ",(0,o.kt)("strong",{parentName:"p"},"continuously synchronization across namespaces"),", we provide a tool, namely ",(0,o.kt)("strong",{parentName:"p"},"ResourceDistribution"),", to do this automatically. "),(0,o.kt)("p",null,"Currently, ResourceDistribution supports the two kind resources --- ",(0,o.kt)("strong",{parentName:"p"},"Secret & ConfigMap"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: ResourceDistribution\nmetadata:\n  name: sample\nspec:\n  resource:\n    apiVersion: v1\n    kind: ConfigMap\n    metadata:\n      name: game-demo\n    data:\n      ...\n  targets:\n    namespaceLabelSelector:\n      ...\n    # or includedNamespaces, excludedNamespaces\n")),(0,o.kt)("p",null,"So you can see ResourceDistribution is a kind of ",(0,o.kt)("strong",{parentName:"p"},"cluster-scoped CRD"),", which is mainly composed of two fields: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"resource")," and ",(0,o.kt)("inlineCode",{parentName:"strong"},"targets")),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resource")," is a ",(0,o.kt)("strong",{parentName:"li"},"complete")," and ",(0,o.kt)("strong",{parentName:"li"},"correct")," resource structure in YAML style."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"targets")," indicates the target namespaces that the resource should be distributed into.")),(0,o.kt)("p",null,"For more details please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manuals/resourcedistribution"},"documentation"),"."),(0,o.kt)("h3",{id:"3-container-launch-priority"},"3. Container launch priority"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/Concurrensee"},"@Concurrensee"))),(0,o.kt)("p",null,"Containers in a same Pod in it might have dependence, which means the application in one container runs depending on another container. For example:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Container A has to start first. Container B can start only if A is already running."),(0,o.kt)("li",{parentName:"ol"},"Container B has to exit first. Container A can stop only if B has already exited.")),(0,o.kt)("p",null,"Currently, the sequences of containers start and stop are controlled by Kubelet.\nKubernetes used to have a KEP, which plans to add a type field for container to identify the priority of start and stop. However, it has been refused because of sig-node thought it may bring a huge change to code."),(0,o.kt)("p",null,"So OpenKruise provides a feature named ",(0,o.kt)("strong",{parentName:"p"},"Container Launch Priority"),", which helps user control the sequence of containers start in a Pod."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User only has to put the annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"apps.kruise.io/container-launch-priority: Ordered")," in a Pod, then Kruise will ensure all containers in this Pod should be started by the sequence of ",(0,o.kt)("inlineCode",{parentName:"li"},"pod.spec.containers")," list."),(0,o.kt)("li",{parentName:"ol"},"If you want to customize the launch sequence, you can add ",(0,o.kt)("inlineCode",{parentName:"li"},"KRUISE_CONTAINER_PRIORITY")," environment in container. The range of the value is ",(0,o.kt)("inlineCode",{parentName:"li"},"[-2147483647, 2147483647]"),". The container with higher priority will be guaranteed to start before the others with lower priority.")),(0,o.kt)("p",null,"For more details please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/user-manuals/containerlaunchpriority"},"documentation"),"."),(0,o.kt)("h3",{id:"4-kubectl-kruise-commandline-tool"},"4. ",(0,o.kt)("inlineCode",{parentName:"h3"},"kubectl-kruise")," commandline tool"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Author: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/hantmac"},"@hantmac"))),(0,o.kt)("p",null,"OpenKruise used to provide SDK like ",(0,o.kt)("inlineCode",{parentName:"p"},"kruise-api")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"client-java")," for some programming languages, which can be imported into users' projects. On the other hand, some users also need to operate the workload resources with commandline in test environment."),(0,o.kt)("p",null,"However, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rollout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"set image")," commands in original ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," can only work for built-in workloads, such as Deployment and StatefulSet."),(0,o.kt)("p",null,"So, OpenKruise now provide a commandline tool named ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl-kruise"),", which is a standard plugin of ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," and can work for OpenKruise workload types."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# rollout undo cloneset\n$ kubectl kruise rollout undo cloneset/nginx\n\n#  rollout status advanced statefulset\n$ kubectl kruise rollout status statefulsets.apps.kruise.io/sts-demo\n\n# set image of a cloneset\n$ kubectl kruise set image cloneset/nginx busybox=busybox nginx=nginx:1.9.1\n")),(0,o.kt)("p",null,"For more details please read ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli-tool/kubectl-plugin"},"documentation"),"."),(0,o.kt)("h3",{id:"5-other-changes"},"5. Other changes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CloneSet:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"maxUnavailable")," field in ",(0,o.kt)("inlineCode",{parentName:"li"},"scaleStrategy")," to support rate limiting of scaling up."),(0,o.kt)("li",{parentName:"ul"},"Mark revision stable when all pods updated to it, won't wait all pods to be ready.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WorkloadSpread:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manage the pods that have created before WorkloadSpread."),(0,o.kt)("li",{parentName:"ul"},"Optimize the update and retry logic for webhook injection.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advanced DaemonSet:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support in-place update Daemon Pod."),(0,o.kt)("li",{parentName:"ul"},"Support progressive annotation to control if pods creation should be limited by partition.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SidecarSet:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix SidecarSet filter active pods."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"SourceContainerNameFrom")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"EnvNames")," fields in ",(0,o.kt)("inlineCode",{parentName:"li"},"transferenv")," to make the container name flexible and the list shorter.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PodUnavailableBudget:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add no pub-protection annotation to skip validation for the specific Pod."),(0,o.kt)("li",{parentName:"ul"},"PodUnavailableBudget controller watches workload replicas changed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NodeImage:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--nodeimage-creation-delay")," flag to delay NodeImage creation after Node ready.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UnitedDeployment:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix pod NodeSelectorTerms length 0 when UnitedDeployment NodeSelectorTerms is nil.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Other optimization:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"kruise-daemon list and watch pods using protobuf."),(0,o.kt)("li",{parentName:"ul"},"Export cache resync args and defaults to be 0 in chart value."),(0,o.kt)("li",{parentName:"ul"},"Fix http checker reloading after webhook certs updated."),(0,o.kt)("li",{parentName:"ul"},"Generate CRDs with original controller-tools and markers.")),(0,o.kt)("h2",{id:"get-involved"},"Get Involved"),(0,o.kt)("p",null,"Welcome to get involved with OpenKruise by joining us in Github/Slack/DingTalk/WeChat.\nHave something you\u2019d like to broadcast to our community?\nShare your voice at our ",(0,o.kt)("a",{parentName:"p",href:"https://shimo.im/docs/gXqmeQOYBehZ4vqo"},"Bi-weekly community meeting (Chinese)"),", or through the channels below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the community on ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.slack.com/channels/openkruise"},"Slack")," (English)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on DingTalk: Search GroupID ",(0,o.kt)("inlineCode",{parentName:"li"},"23330762")," (Chinese)."),(0,o.kt)("li",{parentName:"ul"},"Join the community on WeChat: Search User ",(0,o.kt)("inlineCode",{parentName:"li"},"openkruise")," and let the robot invite you (Chinese).")))}m.isMDXComponent=!0},4843:function(e,t,n){t.Z=n.p+"assets/images/features-en-659914e95b0df596a344f733aa198993.png"},9347:function(e,t,n){t.Z=n.p+"assets/images/inplace-update-comparation-fc948df195e332f578d4967c34b0c3d3.png"}}]);