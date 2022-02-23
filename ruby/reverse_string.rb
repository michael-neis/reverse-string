def reverse_string(str)
  # type your code in here

new_array = []

arr = str.split('')

arr.each do |char| 
  new_array.unshift(char)
end

new_array.join

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')
  
  puts

  puts "Expecting: 'leahciM'"
  puts "=>", reverse_string('Michael')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution