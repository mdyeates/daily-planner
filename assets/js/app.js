/*
  While/For Loop that loops starting at 9 and breaks at 5
    - For each loop generate or build html timeblock row
      • Append timeblock to container
        º Hour
          - A number corresponding with the hour in 12 hour format
        º Textarea
          - Show existing event text, if any and allow user to input event text
        º Save Button
          - When clicked, store/reset the event text corresponding with the hour to localStorage
      • Increase hour by one
      • Check if hour is past, current or future and apply corresponding css class to timeblock
*/
