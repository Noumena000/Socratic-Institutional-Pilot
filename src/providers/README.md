# Provider Boundary

Provider implementations belong behind a stable interface. The public mock demonstrates the expected separation without connecting to any production service.

A future approved provider must keep credentials server-side, validate structured outputs, record failures, minimize transmitted data, and support a deterministic fallback. Institution-specific provider code should live in a separate private adapter repository rather than this public demonstration.
