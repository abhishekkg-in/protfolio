 
def find_songs_with_target_duration(songs, T):
    dd = {}
    ans = None

    for i, d in enumerate(songs):
        c = T-d
        if c in dd:
            print("got,,,", c, i)
            ans = [c,i]
        else:
            dd[d] = i
    return ans if ans is not None else "null"

# Example usage:
songs = [180, 150, 240, 130, 110]
T = 360
print(find_songs_with_target_duration(songs, T))  # Output: (0, 2)