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
          type: "Music&SE"
        },
        {
          id: 2,
          name: "Cycle",
          type: "SE"
        },
        {
          id: 3,
          name: "Song of “us”",
          type: "Music&SE"
        },
        {
          id: 4,
          name: "Crack",
          type: "Music"
        },
        {
          id: 5,
          name: "Cliff,Eating,Bell",
          type: "SE"
        },
        {
          id: 6,
          name: "Song of “You”",
          type: "Music&SE"
        },
        {
          id: 7,
          name: "Undercooked Fish",
          type: "SE"
        },
        {
          id: 8,
          name: "Reminisce",
          type: "Music"
        },
        {
          id: 9,
          name: "Shape of the Moon",
          type: "Music&SE"
        },
        {
          id: 10,
          name: "Wakare",
          type: "Music"
        },
        {
          id: 11,
          name: "Song of “I”",
          type: "Music&SE"
        },
        {
          id: 12,
          name: "Festival",
          type: "Music"
        },
        {
          id: 13,
          name: "Enroll -Tabiji",
          type: "Music"
        }
      ]
    end
  end
end