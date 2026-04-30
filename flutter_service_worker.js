'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "34e05ccb81f2170e8146f040e5eed515",
"index.html": "601cc5e7d376b4db577412d5f6e0ce2e",
"/": "601cc5e7d376b4db577412d5f6e0ce2e",
"main.dart.js": "77d8689dbbd526ee45f3c3f9403ba73d",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
".git/ORIG_HEAD": "908b19b1f3c8c5f95b3006ff92006f54",
".git/config": "adfc2635cf115158df733ac819090ad2",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/32/e647aaeb5d4f77a18ea9a7e338324a41a2776a": "a130b7747538b392d5a79084731b4f49",
".git/objects/69/90968313d7b796d8c275539ee6a09b035961eb": "29ae6f73623fb86ebbeb61e14e86997e",
".git/objects/0b/4af71351e0c98ecb95cc7604d50bbb014c5d51": "8b2c8c50d300e660f6b4d802eee53b56",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/563722a17762daac5e7acafc6b43072d83bd4f": "ff4f00369cd152c1855d9ea4aa2e2b24",
".git/objects/0e/fa8e44e6b6f5669d524e773b0f98f638427f7a": "ed3342642fb0a7bd445e8c220234094f",
".git/objects/33/e7035edf8406da35a3bcce645b59aac51499c9": "11322865a9397ba285fd41f8754aa97f",
".git/objects/9d/53da861fe14dd3484cb411f71bebbeabfd650d": "ea0758789038b3197fdc83f289c67e67",
".git/objects/9d/1461fc7566b1f5c372627e1c4f9716d3cf8391": "bdd58bbe7a66e48981298b0b4f05e614",
".git/objects/a3/2790d0fb3c6d311b97c6c939e4d0c6be60e25a": "92c7897ac9674136048ddeb21317c5f1",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b2/6cc9a6423e7b4db45fd81353370f011c1fad0f": "c16d2673ae8326b42d937746b4d020bc",
".git/objects/ac/a697a8604556b5cb6e2cce3348d04d2ddf42e4": "ea1ffbd35e31d6b1a4f8060705f00f6f",
".git/objects/ad/8930d710d35d60bfe4aeece59a3ecec4b5c7b8": "446fd1aa02c3e06b1f13e8eda05f2440",
".git/objects/b3/61a2a868f6f012fd9a9897a579aeb837905c05": "b98116799158276acd038b0123d2d82a",
".git/objects/bd/56e7ed2ab80163f2c2e1200758336215d805fc": "6603cb713825a5de709408a0ea1d2591",
".git/objects/d1/7b727c8d4f4af024fba70659f00bf0ac92931f": "80f7ca7044b048108fd26dfba7a8176c",
".git/objects/ae/17b96f2c3ca567f62593129bed1b599f20f89e": "22b324ac1ac1ea7b3351cfaa3754071f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/70585b7497f90e62ee0f20cf3464435fc98900": "d11217f020d0744a7ecbd8770b4b35c4",
".git/objects/ca/f92feb67a547c602e01d70328b3af5852e892c": "d0d84dd21dc8fe6157c9d391d1822dea",
".git/objects/ca/7ab85e0b8f82eebfc5c4756da74f7f95823bfb": "8503f89ef20ef47b273fccc972b39d35",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/02b2c50be8db9aba53bd6b31a4f80ba80256e7": "71debb1b777d284ff7c32008550e2982",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/42/75b1ab142222c066d3b50f03129ee8268e3a64": "6b85471a06b640bad0af8a5a75469bbe",
".git/objects/74/6d9a54087b611941431233f93f8a16a5ad9431": "d9ba8d9b239f801058b3e6bf6e685998",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/7e/7c3c389b12fb240ac66445454ef54ad0d58c97": "9cd4a7bc6f573de25190ef0362f6fdf4",
".git/objects/21/49781ee07acc15c7d27c6ab1445558e36885a8": "d239051fbc6ea048ffa50ce80812ac5d",
".git/objects/4d/216f36767d245c0962fe3f06d93a14737dfb20": "be8f06fc122c8d7082d7272603f3ae69",
".git/objects/75/ada7c7d719c7f54136d015adc7f99928b81fe3": "5ef6dee79aa03f273c2d517413b1ea3d",
".git/objects/81/d3886ddd1ca4d79333aba61fa3f16ca7d81a50": "43de6293e264c2dccb3b2d6aed8e5d73",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/72/938393d5cfafac0533a7e3dc65869762b6a635": "0266dcd8078229234e29f95f829032c1",
".git/objects/9f/9f5eb02954a32e7b2d968ce6472440081c1956": "b3628cacb7cbf489b2f157eb11f438c2",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/36/bdadce63d484cf0387bd2f55635cb3c4366fe6": "fc636da2417b7f5b231a948c071108a9",
".git/objects/5c/639503723413699665d486f20e7961b4c45cdc": "59f0a3d74f18801b95db989045c251ca",
".git/objects/5c/9f676a545358d281154ab6c45e9174631a4a32": "1c0faf7a632739900e254c3d99672b9d",
".git/objects/09/dfa6ee33d4b53728287c543298b1b0820997d1": "2e7bf4a07430c79fe82e57a150e43b03",
".git/objects/5d/2ab46ffed81972c60f79884efd77d6da9af6c1": "cfa071f175b1e7d5c21d8a02904f2adf",
".git/objects/62/370f4a506d9b73ae013825b11735d52ab15110": "82056f513ae580fd668669b0a530dacd",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/5e/670c6690a59b4b073c4871411fc2e7658825eb": "7674b976c4057af350e1b29678a7ed43",
".git/objects/37/36fad5596240721816e15777dc0959d17a21a8": "64f2daf8b65bad96e69b2c5383914b84",
".git/objects/37/b642a6118f48a8dcd6f7b86ee4334d6f5113c1": "e6c54f3f7bb4f1502eddbb840bd83c3b",
".git/objects/6c/85b220bfd16afa76a73014f24ac26ecfdb3874": "ae64a51cf790c0d78fa8cb780d437bc0",
".git/objects/99/6dfd159f428046a8fd02f84bad5d078bdb9bbc": "50b638f643ef5dca9f912bf08754e154",
".git/objects/63/e6de54a32dee1406c66c917022acaa5a2db576": "033a60e07eeb789de0ece1b20a75a1e5",
".git/objects/90/262297130163f88085342d9a36e93a179daf30": "ecb13a84c236e86ef0791b47bc227f05",
".git/objects/bf/b33948ad142cf8420e7fcb5797708fa46bf027": "69312a7eef5962ff3b83483d4d33b190",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/41d81e67c7501c52f4af348efc2388553aec07": "40123f348c740ecf4bb34ce9a49959b1",
".git/objects/b6/caabde78b65187b16929b3fd4241a054a6b4c6": "c27d7b224453f4c0e2effb221787217d",
".git/objects/b6/4e7bbb887450f547544b91d026ade7244372bb": "4685d69405c123a8915c1be3979324e2",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/f9/e3d50a23ad85defd41cc410ac3b49cc0fc03af": "eab778499134671b7cce5532a7159e75",
".git/objects/f7/dcfebdac23e001d56ba227a11aeaf5453217c4": "8bffa607ddccc569b4288cc686f3298a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c5/198bd93716e90db1d87801cc32d548fd373fa3": "c4a298cdb9e7e278895a5cc87a8c78dc",
".git/objects/f1/a268365e2f073b353b71ee1cdf423dcc88c296": "1d99a31a6f093da53c435b8359c40485",
".git/objects/f1/41e34a7600d4ec30d7aade90ae53d0332ac5aa": "c3a42b3df1f71b3df6a64758fde5527b",
".git/objects/41/30dfa28ccdd16536966bacdb4944417adfb1e0": "647fc737e0b42f6d24b202e5f1f27042",
".git/objects/83/c7e330779f1f0af6fce5e875a705d5e10ca0af": "1914b23ad3988f86580505ad0c39b5b7",
".git/objects/48/ac26c6bc49fceb4b26053ad5b1f64ef556a357": "9c8a1aecb84e0b053557f860a6c7ca3c",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4f/76a7968c10a6fa9f39ec4fde44524938439161": "b8b6577d8d4f1ef481ea945e706ff16e",
".git/objects/8d/59f80ef17cb4dc10b677b77bb38cfe6296c6aa": "e22971724808eb9492a77e7a0b3af0d4",
".git/objects/12/5109050015fb1e7e6e499104d06ff6afbc40d9": "c2b312b98033961a783c4489f4efb17d",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/e86d9ec5c68fae15f2cbb5a2ee5dbc5bff2f52": "19d2319b951e6c3da97bbad4bbd4d922",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/47/b3d68faf826e08e841916cfd93e02e6fdcec79": "1c496e4cb8368bd14d96f5b9228366fc",
".git/objects/22/83ecd032bb36c40ab0f36181bfac5104a1c469": "e3162503645b115b414edb5079b3c638",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce0b591e0ba9342a79037f8bdefca9bc",
".git/logs/refs/heads/main": "b4bc6302ccd3a300e5799ce69fdad7ec",
".git/logs/refs/remotes/origin/main": "a009ceb4ecb21682197e31d172d2a4a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "821885f348e10d8607d1faef75c1a81b",
".git/refs/remotes/origin/main": "821885f348e10d8607d1faef75c1a81b",
".git/index": "47572a6e1858156e039811dd8d0d2d6a",
".git/COMMIT_EDITMSG": "497ca5e24c471fdaa5f70d12ce990ffc",
".git/FETCH_HEAD": "94dbd09b00e64dd1c84d2e15cf5d66db",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"assets/NOTICES": "bafab44fef7d6ff9253ee70f85caf7ee",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "0c8d80f044582868dd6d56365c57f2db",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
