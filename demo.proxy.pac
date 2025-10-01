// demo.proxy.pac — FOR DEMO/TEST PURPOSES ONLY
// Routes example.com through a test proxy (placeholder), all other hosts go direct.

function FindProxyForURL(url, host) {
  // If accessing example.com, send to a demo proxy (replace with your test proxy if you have one)
  if (shExpMatch(host, "example.com") || shExpMatch(host, "www.example.com")) {
    return "PROXY proxy.example.local:8080";
  }

  // If accessing a local network address, go DIRECT
  if (isPlainHostName(host) || shExpMatch(host, "*.local")) {
    return "DIRECT";
  }

  // Default: go directly to internet
  return "DIRECT";
}
