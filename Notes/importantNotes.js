/*
   Important — map, filter, find, reduce, chaining, closures, callbacks

  Quick recap:
    map()     -> transforms each item, returns a NEW array (same length)
    filter()  -> keeps items matching a condition, returns a NEW array (any length)
    find()    -> returns the FIRST matching item itself (or undefined), not an array
    reduce()  -> folds the whole array down to ONE value (always pass an initial value!)
    chaining  -> filter().map().reduce() reads left to right, step by step
    closures  -> a function "remembers" variables from where it was created
    callbacks -> functions passed as arguments (e.g. sort's comparator)
    mutation  -> objects/arrays are passed by reference — copy with {...obj} / [...arr]
                 before changing them if the original must stay untouched

  Practice tasks below: read the problem + example, fill in each TODO
  yourself first. Full solutions are commented out at the bottom of
  this file — only check them after you've attempted it.
*/
