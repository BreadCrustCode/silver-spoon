// full-proxy.proxy.pac — Routes ALL traffic through a proxy you control.
// Replace "proxy.example.local:8080" with your real proxy hostname:port.

function FindProxyForURL(url, host) {
  // Always try the proxy first, then fall back to DIRECT if proxy is unreachable.
  return "PROXY proxy.example.local:8080; DIRECT";
}
