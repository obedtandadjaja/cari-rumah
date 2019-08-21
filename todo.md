- Need authorization middleware
- Need to hook auth service to this backend proj
- How to make the autocomplete better?
  - Need to do some district level matching that Google can't do e.g. Puri Indah
  - MVP functionalities:
    - Can detect municipality/region without specifying so - this is covered by Google *to an extent*
    - Can detect Apartment/Building name without specifying so - this is definitely covered by Google
    - Can detect address without specifying so - this is also definitely covered by Google
  - Possible solutions:
    - Any predictions made by Google, get the lat long of that and have the map to center around that particular area. Start by paginating areas that are closest to the epicenter and start getting more and more areas that are further away
    - Since for every place there is going to be a geometry vector, if the results are less than 20 listings, then we can increase the distance from epicenter by 10 miles
- Need to query in the DB for closest listings near a searched item
  - found a good medium article for Postgres: https://medium.com/@philipdbrown/oh-postgresql-you-surprise-me-everyday-geospatial-search-49e63ea14a18
    sample query:
    ```
    select *, point(-118.2603001, 34.0379888)::point <@> point(longitude, latitude)::point as distance
    from addresses 
    where (point(-118.2603001, 34.0379888)::point <@> point(longitude, latitude)::point) < 10
    order by distance;
    ```
