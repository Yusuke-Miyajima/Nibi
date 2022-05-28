class Music
  class << self
    def find id
      data.detect { |music| music[:id] == id.to_i }
    end

    def data
      [
        {
          id: 1,
          name: "Main Themen - Mizu no Hoshi",
          type: "Music&SE",
          file: "M1_Mizu no Hoshi - Main Theme - 0401.mp3"
        },
        {
          id: 2,
          name: "Cycle",
          type: "SE",
          file: "M2_Cycle_0401.wav"
        },
        {
          id: 3,
          name: "Song of “us”",
          type: "Music&SE",
          file: 'M3_Song of "us" 0401.wav'
        },
        {
          id: 4,
          name: "Crack",
          type: "Music",
          file: "M4_Crack_0401.wav"
        },
        {
          id: 5,
          name: "Cliff,Eating,Bell",
          type: "SE",
          file: "M5_Cliff,Eating,Bell_0401.wav"
        },
        {
          id: 6,
          name: "Song of “You”",
          type: "Music&SE",
          file: 'M6_Song of "You"_0401.wav'
        },
        {
          id: 7,
          name: "Undercooked Fish",
          type: "SE",
          file: "M7 Undercooked Fish_0401.wav"
        },
        {
          id: 8,
          name: "Reminisce",
          type: "Music",
          file: "M8 Reminisce_0401.wav"
        },
        {
          id: 9,
          name: "Shape of the Moon",
          type: "Music&SE",
          file: "M9 Shape of The Moon_0401.wav"
        },
        {
          id: 10,
          name: "Wakare",
          type: "Music",
          file: "M10_Wakare_0401.wav"
        },
        {
          id: 11,
          name: "Song of “I”",
          type: "Music&SE",
          file: 'M11_Song of "i" 0401.wav'
        },
        {
          id: 12,
          name: "Festival",
          type: "Music",
          file: "M12_Festival_0401.wav"
        },
        {
          id: 13,
          name: "Enroll -Tabiji",
          type: "Music",
          file: "M13_Endroll - Tabiji - 0401.wav"
        }
      ]
    end
  end
end