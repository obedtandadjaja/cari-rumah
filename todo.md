- Use apollo server data structures to cache some common queries
- Do whitelist on graphql handler as opposed to on per method basis

Pagination:
- dynamic query constructor
  - if after present: add where <primary column> > <after>
  - if before present: add where <primary column> < <before>
  - if batchSize present: add limit <batchSize>
  - if orderby and orderdirection present: add order by <order by> <order direction>
