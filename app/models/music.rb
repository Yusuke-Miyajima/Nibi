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
          file: "M1 Mizu no Hoshi - Main Theme -.wav"
        },
        {
          id: 2,
          name: "Cycle",
          type: "SE",
          file: "M2 Cycle.wav"
        },
        {
          id: 3,
          name: "Song of “us”",
          type: "Music&SE",
          file: 'M3 Song of "us".wav'
        },
        {
          id: 4,
          name: "Crack",
          type: "Music",
          file: "M4 Crack.wav"
        },
        {
          id: 5,
          name: "Cliff,Eating,Bell",
          type: "SE",
          file: "M5 Cliff,Eating,Bell.wav"
        },
        {
          id: 6,
          name: "Song of “You”",
          type: "Music&SE",
          file: 'M6 Song of "You".wav'
        },
        {
          id: 7,
          name: "Undercooked Fish",
          type: "SE",
          file: "M7 Undercooked Fish.wav"
        },
        {
          id: 8,
          name: "Reminisce",
          type: "Music",
          file: "M8 Reminisce.wav"
        },
        {
          id: 9,
          name: "Shape of the Moon",
          type: "Music&SE",
          file: "M9 Shape of The Moon.wav"
        },
        {
          id: 10,
          name: "Wakare",
          type: "Music",
          file: "M10 Wakare.wav"
        },
        {
          id: 11,
          name: "Song of “I”",
          type: "Music&SE",
          file: 'M11 Song of "i" .wav'
        },
        {
          id: 12,
          name: "Festival",
          type: "Music",
          file: "M12 Festival.wav"
        },
        {
          id: 13,
          name: "Enroll -Tabiji",
          type: "Music",
          file: "M13 Endroll - Tabiji -.wav"
        }
      ]
    end
  end
end
