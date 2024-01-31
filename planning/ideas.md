# Constructable Data Tables

## Intro
I try to develop an universal HTML Data Table Component in this project.
The following features should be implemented:

* A table can be divided into separate areas. Each of them have its own data source. 
  Areas of table can be linked together in a direction (col or row), i.e the scrolling
  of the areas is synchronized by a key mapping. With this technique the cols or rows of two or more
  different areas are paired while scrolling in the table. Also the sorting and filtering 
  is synchronized over multiple areas. 
* Within a table areas can be be arranged with layouts. The initial set of layouts
  consists of a RowLayout, a ColumnLayout, a GridLayout and a StackedLayout. With the 
  StackedLayout it is possible to create 3D-Tables. Custom layouts are possible.
* There is a programmable data source concept. Data sources are classes the specify 
  a set of methods to access data to show with the table. 
* A two level filter concept: Filter can be defined for the data sources and for table areas.
  With data source filters, it is possible to propagate the filtering to API backends.
  That can limit the transferred data enormously. Area filters are easier to implement if
  there is no dynamic caching. Use cases are with local available data or editor tables.
* A two level sort concept: Like the filters sorting is possible for data sources or areas.
  One can define the sort order and establish sort hierarchies, even over different areas
  if they are synchronized.
* Data sources provide pagination. When using pagination, filtering and sorting mus be done 
  with the data source. 
* Area filters can be freely customized by filter functions. Data source filters can be freely 
  customized by API handlers. 
* There are various concepts that handle with the cells of a table. 
  * kind of a cell: 
    * field cell: belongs to a singe data field in a single record. 
    * aggregate cell: aggregates over a single filed in a list of records.
    * stream cell: is fed be a data stream 
    * editable cell: can change the underlying data
  * cell types: defines for what type of data a cell will be configured. 
  * cell zoom: One can add a special display area to a table. If complex data 
    is assigned to the cell the cell itself just displays a short version of that data. 
    Activating the cell zoom will display more or all of that data in the display area.
    Cell zoom works with layout functions for sub tables, forms, geographic maps, charts and so on.
  * cell editors: editable cells can be be assigned with a cell editor which is capable of 
    formatting and converting text into data types.   
  * cell styling: cell can be styled manually or with auto stylers.
  * The core implementation will contains code for web objects. Implementations for 
    other frameworks (Vue, React, Angular, ...) will follow in separate projects.


## Data Layouts

A Data Layout is the glue between one or more Data Sources and one or more Table Areas.
On one side they are linked to data sources and combine their data to a common data pool
synchronized with a defined key. 

