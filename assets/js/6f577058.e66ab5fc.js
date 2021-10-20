"use strict";(self.webpackChunkopenkruise_io=self.webpackChunkopenkruise_io||[]).push([[9286],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={title:"CloneSet"},p=void 0,s={unversionedId:"user-manuals/cloneset",id:"user-manuals/cloneset",isDocsHomePage:!1,title:"CloneSet",description:"This controller provides advanced features to efficiently manage stateless applications that",source:"@site/docs/user-manuals/cloneset.md",sourceDirName:"user-manuals",slug:"/user-manuals/cloneset",permalink:"/docs/next/user-manuals/cloneset",editUrl:"https://github.com/openkruise/openkruise.io/edit/master/docs/user-manuals/cloneset.md",tags:[],version:"current",lastUpdatedBy:"Siyu Wang",lastUpdatedAt:1634722555,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"CloneSet"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/next/core-concepts/architecture"},next:{title:"Advanced StatefulSet",permalink:"/docs/next/user-manuals/advancedstatefulset"}},d=[{value:"Scale features",id:"scale-features",children:[{value:"Support PVCs",id:"support-pvcs",children:[]},{value:"Selective Pod deletion",id:"selective-pod-deletion",children:[]},{value:"Deletion Sequence",id:"deletion-sequence",children:[]},{value:"Short hash label",id:"short-hash-label",children:[]}]},{value:"Update features",id:"update-features",children:[{value:"Update types",id:"update-types",children:[]},{value:"Template and revision",id:"template-and-revision",children:[]},{value:"Partition",id:"partition",children:[]},{value:"MaxUnavailable",id:"maxunavailable",children:[]},{value:"MaxSurge",id:"maxsurge",children:[]},{value:"Update sequence",id:"update-sequence",children:[]},{value:"Paused update",id:"paused-update",children:[]},{value:"Pre-download image for in-place update",id:"pre-download-image-for-in-place-update",children:[]}]},{value:"Lifecycle hook",id:"lifecycle-hook",children:[{value:"State circulation",id:"state-circulation",children:[]},{value:"Example for user controller logic",id:"example-for-user-controller-logic",children:[]}]}],u={toc:d};function c(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This controller provides advanced features to efficiently manage stateless applications that\ndo not have instance order requirement during scaling and rollout. Analogously,\nCloneSet can be recognized as an enhanced version of upstream ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," workload, but it does many more."),(0,i.kt)("p",null,"As name suggests, CloneSet is a ",(0,i.kt)("a",{parentName:"p",href:"/blog/workload-classification-guidance"},"Set -suffix controller")," which\nmanages Pods directly. A sample CloneSet yaml looks like following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  labels:\n    app: sample\n  name: sample\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: sample\n  template:\n    metadata:\n      labels:\n        app: sample\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:alpine\n")),(0,i.kt)("h2",{id:"scale-features"},"Scale features"),(0,i.kt)("h3",{id:"support-pvcs"},"Support PVCs"),(0,i.kt)("p",null,"CloneSet allows user to define PVC templates ",(0,i.kt)("inlineCode",{parentName:"p"},"volumeClaimTemplates")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"CloneSetSpec"),", which can support PVCs per Pod.\nThis cannot be done with ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),". If not specified, CloneSet will only create Pods without PVCs."),(0,i.kt)("p",null,"A few reminders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each PVC created by CloneSet has an owner reference. So when a CloneSet has been deleted, its PVCs will be cascading deleted."),(0,i.kt)("li",{parentName:"ul"},'Each Pod and PVC created by CloneSet has a "apps.kruise.io/cloneset-instance-id" label key. They use the same string as label value which is composed of a unique  ',(0,i.kt)("strong",{parentName:"li"},"instance-id")," as suffix of the CloneSet name."),(0,i.kt)("li",{parentName:"ul"},"When a Pod has been deleted by CloneSet controller, all PVCs related to it will be deleted together."),(0,i.kt)("li",{parentName:"ul"},"When a Pod has been deleted manually, all PVCs related to the Pod are preserved, and CloneSet controller will create a new Pod with the same ",(0,i.kt)("strong",{parentName:"li"},"instance-id")," and reuse the PVCs."),(0,i.kt)("li",{parentName:"ul"},"When a Pod is updated using ",(0,i.kt)("strong",{parentName:"li"},"recreate")," policy, all PVCs related to it will be deleted together."),(0,i.kt)("li",{parentName:"ul"},"When a Pod is updated using ",(0,i.kt)("strong",{parentName:"li"},"in-place")," policy, all PVCs related to it are preserved.")),(0,i.kt)("p",null,"The following shows a sample CloneSet yaml file which contains PVC templates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  labels:\n    app: sample\n  name: sample-data\nspec:\n  replicas: 5\n  selector:\n    matchLabels:\n      app: sample\n  template:\n    metadata:\n      labels:\n        app: sample\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:alpine\n        volumeMounts:\n        - name: data-vol\n          mountPath: /usr/share/nginx/html\n  volumeClaimTemplates:\n    - metadata:\n        name: data-vol\n      spec:\n        accessModes: [ "ReadWriteOnce" ]\n        resources:\n          requests:\n            storage: 20Gi\n')),(0,i.kt)("h3",{id:"selective-pod-deletion"},"Selective Pod deletion"),(0,i.kt)("p",null,"When a CloneSet is scaled down, sometimes user has preference to deleting specific Pods.\nThis cannot be done using ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"StatefulSet")," always delete Pod\nin order and ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicaSet")," only delete Pod by its own sorted sequence."),(0,i.kt)("p",null,"CloneSet allows user to specify to-be-deleted Pod names when scaling down ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),". Take the following\nsample as an example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  replicas: 4\n  scaleStrategy:\n    podsToDelete:\n    - sample-9m4hp\n")),(0,i.kt)("p",null,"when controller receives above update request, it ensures the number of replicas to be 4. If some Pods needs to be\ndeleted, the Pods listed in ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," will be deleted first.\nController will clear ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," automatically once the listed Pods are deleted. Note that:"),(0,i.kt)("p",null,"If one just adds a Pod name to ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," and do not modify ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),", controller will delete this Pod, and create a new Pod.\nIf one is unable to change CloneSet directly, an alternative way is to add a label ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/specified-delete: true")," onto the Pod waiting to delete."),(0,i.kt)("p",null,"Comparing to delete the Pod directly, using ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/specified-delete: true"),"\nwill have CloneSet protection by ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"maxSurge")," and lifecycle ",(0,i.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," triggering (See below)."),(0,i.kt)("h3",{id:"deletion-sequence"},"Deletion Sequence"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node unassigned < assigned"),(0,i.kt)("li",{parentName:"ol"},"PodPending < PodUnknown < PodRunning"),(0,i.kt)("li",{parentName:"ol"},"Not ready < ready"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#pod-deletion-cost"},"Lower pod-deletion cost < higher pod-deletion-cost")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#deletion-by-spread-constraints"},"Higher spread rank < lower spread rank")),(0,i.kt)("li",{parentName:"ol"},"Been ready for empty time < less time < more time"),(0,i.kt)("li",{parentName:"ol"},"Pods with containers with higher restart counts < lower restart counts"),(0,i.kt)("li",{parentName:"ol"},"Empty creation time pods < newer pods < older pods")),(0,i.kt)("h4",{id:"pod-deletion-cost"},"Pod deletion cost"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/labels-annotations-taints/#pod-deletion-cost"},"controller.kubernetes.io/pod-deletion-cost")," annotation\nis defined in Kubernetes since ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.21"),", Deployment/ReplicaSet will remove pods according to this cost when downscaling.\nAnd CloneSet has also supported it since Kruise ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.9.0"),"."),(0,i.kt)("p",null,"The annotation should be set on the pod, the range is ","[-2147483647, 2147483647]",".\nIt represents the cost of deleting a pod compared to other pods belonging to the same CloneSet.\nPods with lower deletion cost are preferred to be deleted before pods with higher deletion cost."),(0,i.kt)("p",null,"The implicit value for this annotation for pods that don't set it is 0; negative values are permitted."),(0,i.kt)("h4",{id:"deletion-by-spread-constraints"},"Deletion by Spread Constraints"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.10.0"),(0,i.kt)("p",null,"The original proposal(design doc) is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise/blob/master/docs/proposals/20210624-cloneset-scaledown-topology-spread.md"},"here"),"."),(0,i.kt)("p",null,"Currently, it supports ",(0,i.kt)("strong",{parentName:"p"},"deletion by same node spread")," and ",(0,i.kt)("strong",{parentName:"p"},"deletion by ",(0,i.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/"},"pod topolocy spread constraints")),"."),(0,i.kt)("p",null,"If there are Pod Topology Spread Constraints defined in CloneSet template, controller will choose pods according to spread constraints when the cloneset needs to scale down.\nOtherwise, controller will choose pods by same node spread by default when scaling down."),(0,i.kt)("h3",{id:"short-hash-label"},"Short hash label"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"By default, CloneSet set the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-revision-hash")," in Pod label to the full name of ControllerRevision, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    controller-revision-hash: demo-cloneset-956df7994\n")),(0,i.kt)("p",null,"It is joined by the name of CloneSet and the hash of the ControllerRevision.\nLength of the hash is usually 8~10 characters, and the label value in Kubernetes can not be more than 63 characters.\nSo the name of CloneSet should be less than 52 characters."),(0,i.kt)("p",null,"A new feature-gate named ",(0,i.kt)("inlineCode",{parentName:"p"},"CloneSetShortHash")," has been introduced.\nIf it is enabled, CloneSet will only set the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-revision-hash")," to the real hash, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"956df7994"),".\nSo there will be no limit to CloneSet name."),(0,i.kt)("p",null,"Don't worry. Even if you enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"CloneSetShortHash"),", CloneSet will still recognize and manage the old Pods with full revision label."),(0,i.kt)("h2",{id:"update-features"},"Update features"),(0,i.kt)("h3",{id:"update-types"},"Update types"),(0,i.kt)("p",null,"CloneSet provides three update types, defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"ReCreate"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReCreate"),": controller will delete old Pods and PVCs and create new ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceIfPossible"),": controller will try to in-place update Pod instead of recreating them if possible. Please ready the reference doc below."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceOnly"),": controller will in-place update Pod instead of recreating them. With ",(0,i.kt)("inlineCode",{parentName:"li"},"InPlaceOnly")," policy, user cannot modify any fields other than the fields that supported to in-place update.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"You may need to read the ",(0,i.kt)("a",{parentName:"strong",href:"../reference/inplace-update"},"reference doc")," for more details of in-place update.")),(0,i.kt)("p",null,"We also bring ",(0,i.kt)("strong",{parentName:"p"},"graceful period")," into in-place update. CloneSet has supported ",(0,i.kt)("inlineCode",{parentName:"p"},"gracePeriodSeconds"),", which is a period\nduration between controller update pod status and update pod images.\nSo that endpoints-controller could have enough time to remove this Pod from endpoints."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    type: InPlaceIfPossible\n    inPlaceUpdateStrategy:\n      gracePeriodSeconds: 10\n")),(0,i.kt)("h3",{id:"template-and-revision"},"Template and revision"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"spec.template")," defines the latest pod template in the CloneSet.\nController will calculate a revision hash for each version of ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.template")," when it has been initialized or modified.\nFor example, when we create a sample CloneSet, controller will calculate the revision hash ",(0,i.kt)("inlineCode",{parentName:"p"},"sample-744d4796cc")," and\npresent the hash in CloneSet Status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  generation: 1\n  # ...\nspec:\n  replicas: 5\n  # ...\nstatus:\n  observedGeneration: 1\n  readyReplicas: 5\n  replicas: 5\n  currentRevision: sample-d4d4fb5bd\n  updateRevision: sample-d4d4fb5bd\n  updatedReadyReplicas: 5\n  updatedReplicas: 5\n  # ...\n")),(0,i.kt)("p",null,"Here are the explanations for the counters presented in CloneSet status:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.replicas"),": Number of pods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.readyReplicas"),": Number of ",(0,i.kt)("strong",{parentName:"li"},"ready")," pods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.availableReplicas"),": Number of ",(0,i.kt)("strong",{parentName:"li"},"ready and available")," pods (satisfied with ",(0,i.kt)("inlineCode",{parentName:"li"},"minReadySeconds"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.currentRevision"),": Latest revision hash that has used to be updated to all Pods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.updateRevision"),": Latest revision hash of this CloneSet"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.updatedReplicas"),": Number of pods with the latest revision"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.updatedReadyReplicas"),": Number of ",(0,i.kt)("strong",{parentName:"li"},"ready")," pods with the latest revision")),(0,i.kt)("h3",{id:"partition"},"Partition"),(0,i.kt)("p",null,"Partition is the ",(0,i.kt)("strong",{parentName:"p"},"desired number or percent of Pods in old revisions"),", defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),".  This field does ",(0,i.kt)("strong",{parentName:"p"},"NOT")," imply any update order."),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," is set during update:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If it is a number: ",(0,i.kt)("inlineCode",{parentName:"li"},"(replicas - partition)")," number of pods will be updated with the new version."),(0,i.kt)("li",{parentName:"ul"},"If it is a percent: ",(0,i.kt)("inlineCode",{parentName:"li"},"(replicas * (100% - partition))")," number of pods will be updated with the new version.")),(0,i.kt)("p",null,"For example, when we update sample CloneSet's container image to ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx:mainline")," and set ",(0,i.kt)("inlineCode",{parentName:"p"},"partition=3"),", after a while, the sample CloneSet yaml looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  # ...\n  generation: 2\nspec:\n  replicas: 5\n  template:\n    metadata:\n      labels:\n        app: sample\n    spec:\n      containers:\n      - image: nginx:mainline\n        imagePullPolicy: Always\n        name: nginx\n  updateStrategy:\n    partition: 3\n  # ...\nstatus:\n  observedGeneration: 2\n  readyReplicas: 5\n  replicas: 5\n  currentRevision: sample-d4d4fb5bd\n  updateRevision: sample-56dfb978d4\n  updatedReadyReplicas: 2\n  updatedReplicas: 2\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"status.updateRevision")," has been updated to ",(0,i.kt)("inlineCode",{parentName:"p"},"sample-56dfb978d4"),", a new hash.\nSince we set ",(0,i.kt)("inlineCode",{parentName:"p"},"partition=3"),", controller only updates two Pods to the latest revision."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pod -L controller-revision-hash\nNAME           READY   STATUS    RESTARTS   AGE     CONTROLLER-REVISION-HASH\nsample-chvnr   1/1     Running   0          6m46s   sample-d4d4fb5bd\nsample-j6c4s   1/1     Running   0          6m46s   sample-d4d4fb5bd\nsample-ns85c   1/1     Running   0          6m46s   sample-d4d4fb5bd\nsample-jnjdp   1/1     Running   0          10s     sample-56dfb978d4\nsample-qqglp   1/1     Running   0          18s     sample-56dfb978d4\n")),(0,i.kt)("h4",{id:"rollback-by-partition"},"Rollback by partition"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," can only control Pods updating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"status.updateRevision"),".\nWhich means for this CloneSet, when changes ",(0,i.kt)("inlineCode",{parentName:"p"},"partition 5 -> 3"),", CloneSet will update 2 Pods to ",(0,i.kt)("inlineCode",{parentName:"p"},"status.updateRevision"),".\nThen changes ",(0,i.kt)("inlineCode",{parentName:"p"},"partition 3 -> 5")," back, CloneSet will do nothing."),(0,i.kt)("p",null,"But if you have enabled ",(0,i.kt)("inlineCode",{parentName:"p"},"CloneSetPartitionRollback")," feature-gate, in this case,\nCloneSet will update the 2 Pods in ",(0,i.kt)("inlineCode",{parentName:"p"},"status.updateRevision")," back to ",(0,i.kt)("inlineCode",{parentName:"p"},"status.currentRevision"),"."),(0,i.kt)("h3",{id:"maxunavailable"},"MaxUnavailable"),(0,i.kt)("p",null,"MaxUnavailable is the maximum number of Pods that can be unavailable.\nValue can be an absolute number (e.g., 5) or a percentage of desired number of Pods (e.g., 10%).\nDefault value is 20%."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    maxUnavailable: 20%\n")),(0,i.kt)("p",null,"Since Kruise ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.9.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," not only controls Pods update, but also affect Pods specified deletion."),(0,i.kt)("p",null,"Which means if you declare to delete a Pod via ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/specified-delete: true"),",\nCloneSet will delete it only if the number of unavailable Pods (comparing to the replicas number) is less than ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable"),"."),(0,i.kt)("h3",{id:"maxsurge"},"MaxSurge"),(0,i.kt)("p",null,"MaxSurge is the maximum number of pods that can be scheduled above the desired replicas.\nValue can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%).\nDefaults to 0."),(0,i.kt)("p",null,"If maxSurge is set somewhere, cloneset-controller will create ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSurge")," number of Pods above the ",(0,i.kt)("inlineCode",{parentName:"p"},"replicas"),",\nwhen it finds multiple active revisions of Pods which means the CloneSet is in the update stage.\nAfter all Pods except ",(0,i.kt)("inlineCode",{parentName:"p"},"partition")," number have been updated to the latest revision, ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSurge")," number Pods will be deleted,\nand the number of Pods will be equal to the ",(0,i.kt)("inlineCode",{parentName:"p"},"replica")," number."),(0,i.kt)("p",null,"What's more, maxSurge is forbidden to use with ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceOnly")," policy.\nWhen maxSurge is used with ",(0,i.kt)("inlineCode",{parentName:"p"},"InPlaceIfPossible"),", controller will create additional Pods with latest revision first,\nand then update the rest Pods with old revisions,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    maxSurge: 3\n")),(0,i.kt)("p",null,"Since Kruise ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.9.0"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"maxSurge")," not only controls Pods update, but also affect Pods specified deletion."),(0,i.kt)("p",null,"Which means if you declare to delete a Pod via ",(0,i.kt)("inlineCode",{parentName:"p"},"podsToDelete")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"apps.kruise.io/specified-delete: true"),",\nCloneSet may create new a Pod, wait it to be ready, and them delete the old one.\nIt depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"maxUnavailable")," and the current number of unavailable Pods."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For a CloneSet ",(0,i.kt)("inlineCode",{parentName:"li"},"maxUnavailable=2, maxSurge=1")," and currently only one unavailable Pods is ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-a"),",\nif you patch ",(0,i.kt)("inlineCode",{parentName:"li"},"apps.kruise.io/specified-delete: true")," onto ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-b")," or put the Pod name into ",(0,i.kt)("inlineCode",{parentName:"li"},"podsToDelete"),",\nCloneSet will delete it directly."),(0,i.kt)("li",{parentName:"ul"},"For a CloneSet ",(0,i.kt)("inlineCode",{parentName:"li"},"maxUnavailable=1, maxSurge=1")," and currently only one unavailable Pods is ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-a"),",\nif you patch ",(0,i.kt)("inlineCode",{parentName:"li"},"apps.kruise.io/specified-delete: true")," onto ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-b")," or put the Pod name into ",(0,i.kt)("inlineCode",{parentName:"li"},"podsToDelete"),",\nCloneSet will create a new Pod, waiting it to be ready, and finally delete ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-b"),"."),(0,i.kt)("li",{parentName:"ul"},"For a CloneSet ",(0,i.kt)("inlineCode",{parentName:"li"},"maxUnavailable=1, maxSurge=1")," and currently only one unavailable Pods is ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-a"),",\nif you patch ",(0,i.kt)("inlineCode",{parentName:"li"},"apps.kruise.io/specified-delete: true")," onto ",(0,i.kt)("inlineCode",{parentName:"li"},"pod-a")," or put the Pod name into ",(0,i.kt)("inlineCode",{parentName:"li"},"podsToDelete"),",\nCloneSet will delete it directly."),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h3",{id:"update-sequence"},"Update sequence"),(0,i.kt)("p",null,"When controller chooses Pods to update, it has default sort logic based on Pod phase and conditions:\n",(0,i.kt)("strong",{parentName:"p"},"unscheduled < scheduled, pending < unknown < running, not-ready < ready"),".\nIn addition, CloneSet also supports advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"scatter")," strategies to allow users to specify the update order."),(0,i.kt)("h4",{id:"priority"},"priority"),(0,i.kt)("p",null,"This strategy defines rules for calculating the priority of updating pods.\nAll update candidates will be applied with the priority terms.\n",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," can be calculated either by weight or by order."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weight"),": Priority is determined by the sum of weights for terms that match selector. For example,")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    priorityStrategy:\n      weightPriority:\n      - weight: 50\n        matchSelector:\n          matchLabels:\n            test-key: foo\n      - weight: 30\n        matchSelector:\n          matchLabels:\n            test-key: bar\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"order"),': Priority will be determined by the value of the orderKey. The update candidates are sorted based on the "int" part of the value string. For example, 5 in string "5" and 10 in string "sts-10".')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    priorityStrategy:\n      orderPriority:\n        - orderedKey: some-label-key\n")),(0,i.kt)("h4",{id:"scatter"},"scatter"),(0,i.kt)("p",null,"This strategy defines rules to make certain Pods be scattered during update.\nFor example, if a CloneSet has ",(0,i.kt)("inlineCode",{parentName:"p"},"replica=10"),", and we add ",(0,i.kt)("inlineCode",{parentName:"p"},"foo=bar")," label in 3 Pods and specify the following scatter rule. These 3 Pods will\nbe the 1st, 6th and 10th updated Pods."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    scatterStrategy:\n    - key: foo\n      value: bar\n")),(0,i.kt)("p",null,"Note that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Although ",(0,i.kt)("inlineCode",{parentName:"li"},"priority")," strategy and ",(0,i.kt)("inlineCode",{parentName:"li"},"scatter")," strategy can be applied together, we strongly suggest to just use one of them to avoid confusion."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"scatter")," strategy is used, we suggest to just use one term. Otherwise, the update order can be hard to understand.")),(0,i.kt)("p",null,"Last but not the least, the above advanced update strategies require independent Pod labeling mechanisms, which are not provided by CloneSet."),(0,i.kt)("h3",{id:"paused-update"},"Paused update"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"paused")," indicates that Pods updating is paused, controller will not update Pods but just maintain the number of replicas."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  # ...\n  updateStrategy:\n    paused: true\n")),(0,i.kt)("h3",{id:"pre-download-image-for-in-place-update"},"Pre-download image for in-place update"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"FEATURE STATE:")," Kruise v0.9.0"),(0,i.kt)("p",null,"If you have enabled the ",(0,i.kt)("inlineCode",{parentName:"p"},"PreDownloadImageForInPlaceUpdate")," feature-gate during ",(0,i.kt)("a",{parentName:"p",href:"../installation#optional-feature-gate"},"Kruise installation or upgrade"),",\nCloneSet controller will automatically pre-download the image you want to update to the nodes of all old Pods.\nIt is quite useful to accelerate the progress of applications upgrade."),(0,i.kt)("p",null,"The parallelism of each new image pre-downloading by CloneSet is ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),", which means the image is downloaded on nodes one by one.\nYou can change the parallelism using the annotation on CloneSet according to the capability of image registry,\nfor registries with more bandwidth and P2P image downloading ability, a larger parallelism can speed up the pre-download process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nmetadata:\n  annotations:\n    apps.kruise.io/image-predownload-parallelism: "5"\n')),(0,i.kt)("p",null,"Note that to avoid most unnecessary image downloading, now controller will only pre-download images for CloneSet with replicas > ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,i.kt)("h2",{id:"lifecycle-hook"},"Lifecycle hook"),(0,i.kt)("p",null,"Each Pod managed by CloneSet has a clear state defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"lifecycle.apps.kruise.io/state")," label:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Normal"),(0,i.kt)("li",{parentName:"ul"},"PreparingUpdate"),(0,i.kt)("li",{parentName:"ul"},"Updating"),(0,i.kt)("li",{parentName:"ul"},"Updated"),(0,i.kt)("li",{parentName:"ul"},"PreparingDelete")),(0,i.kt)("p",null,"Lifecycle hook allows users to do something (for example remove pod from service endpoints) during Pod deleting and before/after in-place update."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-golang"},'type LifecycleStateType string\n\n// Lifecycle contains the hooks for Pod lifecycle.\ntype Lifecycle struct {\n    // PreDelete is the hook before Pod to be deleted.\n    PreDelete *LifecycleHook `json:"preDelete,omitempty"`\n    // InPlaceUpdate is the hook before Pod to update and after Pod has been updated.\n    InPlaceUpdate *LifecycleHook `json:"inPlaceUpdate,omitempty"`\n}\n\ntype LifecycleHook struct {\n    LabelsHandler     map[string]string `json:"labelsHandler,omitempty"`\n    FinalizersHandler []string          `json:"finalizersHandler,omitempty"`\n}\n')),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n\n  # define with finalizer\n  lifecycle:\n    preDelete:\n      finalizersHandler:\n      - example.io/unready-blocker\n    inPlaceUpdate:\n      finalizersHandler:\n      - example.io/unready-blocker\n\n  # or define with label\n  lifecycle:\n    inPlaceUpdate:\n      labelsHandler:\n        example.io/block-unready: "true"\n')),(0,i.kt)("h3",{id:"state-circulation"},"State circulation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Lifecycle circulation",src:n(1997).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When CloneSet delete a Pod (including scale in and recreate update):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Delete it directly if no lifecycle hook definition or Pod not matched preDelete hook"),(0,i.kt)("li",{parentName:"ul"},"Otherwise, CloneSet will firstly update Pod to ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," state and wait for user controller to remove the label/finalizer and Pod not matched preDelete hook"),(0,i.kt)("li",{parentName:"ul"},"Note that Pods in ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," state will not be updated"))),(0,i.kt)("li",{parentName:"ul"},"When CloneSet update a Pod in-place:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If lifecycle hook defined and Pod matched inPlaceUpdate hook, CloneSet will update Pod to ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingUpdate")," state"),(0,i.kt)("li",{parentName:"ul"},"After user controller remove the label/finalizer (thus Pod not matched inPlaceUpdate hook), CloneSet will update it to ",(0,i.kt)("inlineCode",{parentName:"li"},"Updating")," state and start updating"),(0,i.kt)("li",{parentName:"ul"},"After in-place update completed, CloneSet will update Pod to ",(0,i.kt)("inlineCode",{parentName:"li"},"Updated")," state if lifecycle hook defined and Pod not matched inPlaceUpdate hook"),(0,i.kt)("li",{parentName:"ul"},"When user controller add label/finalizer into Pod and it matched inPlaceUpdate hook, CloneSet will finally update it to ",(0,i.kt)("inlineCode",{parentName:"li"},"Normal")," state")))),(0,i.kt)("p",null,"Besides, although our design supports to change a Pod from ",(0,i.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," back to ",(0,i.kt)("inlineCode",{parentName:"p"},"Normal")," (through cancel specified delete), but it is not recommended. Because Pods in ",(0,i.kt)("inlineCode",{parentName:"p"},"PreparingDelete")," state will not be updated by CloneSet, it might be updating immediately if comes back to ",(0,i.kt)("inlineCode",{parentName:"p"},"Normal"),". This case is hard for user controller to handle."),(0,i.kt)("h3",{id:"example-for-user-controller-logic"},"Example for user controller logic"),(0,i.kt)("p",null,"Same as yaml example above, we can fisrtly define\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"example.io/unready-blocker")," finalizer as hook"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"example.io/initialing")," annotation as identity for initializing")),(0,i.kt)("p",null,"Add these fields into CloneSet template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps.kruise.io/v1alpha1\nkind: CloneSet\nspec:\n  template:\n    metadata:\n      annotations:\n        example.io/initialing: "true"\n      finalizers:\n      - example.io/unready-blocker\n  # ...\n  lifecycle:\n    preDelete:\n      finalizersHandler:\n      - example.io/unready-blocker\n    inPlaceUpdate:\n      finalizersHandler:\n      - example.io/unready-blocker\n')),(0,i.kt)("p",null,"User controller logic:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Pod in ",(0,i.kt)("inlineCode",{parentName:"li"},"Normal")," state, if there is ",(0,i.kt)("inlineCode",{parentName:"li"},"example.io/initialing: true")," in annotation and ready condition in Pod status is True, then add it to endpoints and remove the annotation"),(0,i.kt)("li",{parentName:"ul"},"For Pod in ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingDelete")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"PreparingUpdate")," states, delete it from endpoints and remove ",(0,i.kt)("inlineCode",{parentName:"li"},"example.io/unready-blocker")," finalizer"),(0,i.kt)("li",{parentName:"ul"},"For Pod in ",(0,i.kt)("inlineCode",{parentName:"li"},"Updated")," state, add it to endpoints and add ",(0,i.kt)("inlineCode",{parentName:"li"},"example.io/unready-blocker")," finalizer")))}c.isMDXComponent=!0},1997:function(e,t,n){t.Z=n.p+"assets/images/cloneset-lifecycle-b97d746b37527b0cb23eab4fcc7cef39.png"}}]);