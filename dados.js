let dados = [
    { 
        musica: "Tema de Amores Clandestinos - Percy Faith", 
        ano: 1960, 
        link: 'https://www.youtube.com/watch?v=JuUBGtaYho8' 
    },
    { 
        musica: "Tossin And Turnin - Bobby Lewis", 
        ano: 1961, 
        link: 'https://www.youtube.com/watch?v=gRe9WS2Ag_c' 
    },
    { 
        musica: "Stranger On The Shore - Mr. Acker Bilk", 
        ano: 1962, 
        link: 'https://www.youtube.com/watch?v=7jzx664u5DA' 
    },
    { 
        musica: "Sugar Shack - Jimmy Gilmer e The Fireballs", 
        ano: 1963, 
        link: 'https://www.youtube.com/watch?v=9ykeMrTFBJU' 
    },
    { 
        musica: "I Want To Hold Your Hand - Beatles", 
        ano: 1964, 
        link: 'https://www.youtube.com/watch?v=jenWdylTtzs' 
    },
    { 
        musica: "Wooly Bully - Sam The Sham e The Pharaohs", 
        ano: 1965, 
        link: 'https://www.youtube.com/watch?v=Pv5cXss5cPg' 
    },
    { 
        musica: "The Ballad Of The Green Berets - Sgt. Barry Sadler", 
        ano: 1966, 
        link: 'https://www.youtube.com/watch?v=m5WJJVSE_BE' 
    },
    { 
        musica: "To Sir With Love - Lulu", 
        ano: 1967, 
        link: 'https://www.youtube.com/watch?v=exU92EgX9t4' 
    },
    { 
        musica: "Hey Jude - Beatles", 
        ano: 1968, 
        link: 'https://www.youtube.com/watch?v=A_MjCqQoLLA' 
    },
    { 
        musica: "Sugar, Sugar - The Archies", 
        ano: 1969, 
        link: 'https://www.youtube.com/watch?v=j3plj_Xplus' 
    },
    { 
        musica: "Bridge Over Troubled Water - Simon and Garfunkel", 
        ano: 1970, 
        link: 'https://www.youtube.com/watch?v=4G-YQA_bsOU' 
    },
    { 
        musica: "Joy To The World - Three Dog Night", 
        ano: 1971, 
        link: 'https://www.youtube.com/watch?v=EVcpKjXYa5c' 
    },
    { 
        musica: "The First Time Ever I Saw Your Face - Roberta Flack", 
        ano: 1972, 
        link: 'https://www.youtube.com/watch?v=d8_fLu2yrP4' 
    },
    { 
        musica: "Tie A Yellow Ribbon Round The Ole Oak Tree - Tony Orlando e Dawn", 
        ano: 1973, 
        link: 'https://www.youtube.com/watch?v=Z8fhciUojQ0' 
    },
    { 
        musica: "The Way We Were - Barbra Streisand", 
        ano: 1974, 
        link: 'https://www.youtube.com/watch?v=ifWOSnoCS0M' 
    },
    { 
        musica: "Love Will Keep Us Together - Captain e Tennille", 
        ano: 1975, 
        link: 'https://www.youtube.com/watch?v=_QNEf9oGw8o' 
    },
    { 
        musica: "Silly Love Songs - Paul McCartney & Wings", 
        ano: 1976, 
        link: 'https://www.youtube.com/watch?v=ap87QgZKTNw' 
    },
    { 
        musica: "Tonight’s The Night (Gonna Be Alright) - Rod Stewart", 
        ano: 1977, 
        link: 'https://www.youtube.com/watch?v=IZr6AE-u2UM' 
    },
    { 
        musica: "Shadow Dancing - Andy Gibb", 
        ano: 1978, 
        link: 'https://www.youtube.com/watch?v=PZxA3FVUwvk' 
    },
    { 
        musica: "My Sharona - Knack", 
        ano: 1979, 
        link: 'https://www.youtube.com/watch?v=bbr60I0u2Ng' 
    },
    { 
        musica: "Call Me - Blondie", 
        ano: 1980, 
        link: 'https://www.youtube.com/watch?v=StKVS0eI85I' 
    },
    { 
        musica: "Bette Davis Eyes - Kim Carnes", 
        ano: 1981, 
        link: 'https://www.youtube.com/watch?v=EPOIS5taqA8' 
    },
    { 
        musica: "Physical - Olivia Newton-John", 
        ano: 1982, 
        link: 'https://www.youtube.com/watch?v=vWz9VN40nCA' 
    },
    { 
        musica: "Every Breath You Take - The Police", 
        ano: 1983, 
        link: 'https://www.youtube.com/watch?v=OMOGaugKpzs' 
    },
    { 
        musica: "When Doves Cry - Prince", 
        ano: 1984, 
        link: 'https://www.youtube.com/watch?v=UG3VcCAlUgE' 
    },
    { 
        musica: "Careless Whisper - Wham", 
        ano: 1985, 
        link: 'https://www.youtube.com/watch?v=dODb9vQnvMk' 
    },
    { 
        musica: "That’s What Friends Are For - Dionne Warwick", 
        ano: 1986, 
        link: 'https://www.youtube.com/watch?v=HyTpu6BmE88' 
    },
    { 
        musica: "Walk Like An Egyptian - Bangles", 
        ano: 1987, 
        link: 'https://www.youtube.com/watch?v=Cv6tuzHUuuk' 
    },
    { 
        musica: "Faith - George Michael", 
        ano: 1988, 
        link: 'https://www.youtube.com/watch?v=6Cs3Pvmmv0E' 
    },
    { 
        musica: "Look Away - Chicago", 
        ano: 1989, 
        link: 'https://www.youtube.com/watch?v=2uKLTtVqQpE' 
    },
    { 
        musica: "Hold On - Wilson Phillips", 
        ano: 1990, 
        link: 'https://www.youtube.com/watch?v=uIbXvaE39wM' 
    },
    { 
        musica: "(Everything I Do) I Do It For You - Bryan Adams", 
        ano: 1991, 
        link: 'https://www.youtube.com/watch?v=Y0pdQU87dc8' 
    },
    { 
        musica: "End Of The Road - Boyz II Men", 
        ano: 1992, 
        link: 'https://www.youtube.com/watch?v=zDKO6XYXioc' 
    },
    { 
        musica: "I Will Always Love You - Whitney Houston", 
        ano: 1993, 
        link: 'https://www.youtube.com/watch?v=3JWTaaS7LdU' 
    },
    { 
        musica: "The Sign - Ace Of Base", 
        ano: 1994, 
        link: 'https://www.youtube.com/watch?v=iqu132vTl5Y' 
    },
    { 
        musica: "Gangsta’s Paradise - Coolio", 
        ano: 1995, 
        link: 'https://www.youtube.com/watch?v=fPO76Jlnz6c' 
    },
    { 
        musica: "Macarena - Los Del Rio", 
        ano: 1996, 
        link: 'https://www.youtube.com/watch?v=UoUmyY6CQRo' 
    },
    { 
        musica: "Candle In The Wind / Something About The Way You Look Tonight - Elton John", 
        ano: 1997, 
        link: 'https://www.youtube.com/watch?v=0ofw26lhPQk' 
    },
    { 
        musica: "Too Close - Next", 
        ano: 1998, 
        link: 'https://www.youtube.com/watch?v=kwEZRPkAAu8' 
    },
    { 
        musica: "Believe - Cher", 
        ano: 1999, 
        link: 'https://www.youtube.com/watch?v=nZXRV4MezEw' 
    },
    { 
        musica: "Breathe - Faith Hill", 
        ano: 2000, 
        link: 'https://www.youtube.com/watch?v=yCmsZUN4r_s' 
    },
    { 
        musica: "Hanging By a Moment - Lifehouse", 
        ano: 2001, 
        link: 'https://www.youtube.com/watch?v=tPnK39ax_AM' 
    },
    { 
        musica: "How You Remind Me - Nickelback", 
        ano: 2002, 
        link: 'https://www.youtube.com/watch?v=1cQh1ccqu8M' 
    },
    { 
        musica: "In Da Club - 50 Cent", 
        ano: 2003, 
        link: 'https://www.youtube.com/watch?v=5qm8PH4xAss' 
    },
    { 
        musica: "Yeah! - Usher, Lil Jon e Ludacris", 
        ano: 2004, 
        link: 'https://www.youtube.com/watch?v=GxBSyx85Kp8' 
    },
    { 
        musica: "We Belong Together - Mariah Carey", 
        ano: 2005, 
        link: 'https://www.youtube.com/watch?v=0habxsuXW4g' 
    },
    { 
        musica: "Bad Day - Daniel Powter", 
        ano: 2006, 
        link: 'https://www.youtube.com/watch?v=gH476CxJxfg' 
    },
    { 
        musica: "Irreplaceable - Beyoncé", 
        ano: 2007, 
        link: 'https://www.youtube.com/watch?v=2EwViQxSJJQ' 
    },
    { 
        musica: "Low - Flo Rida e T-Pain", 
        ano: 2008, 
        link: 'https://www.youtube.com/watch?v=U2waT9TxPU0' 
    },
    { 
        musica: "Boom Boom Pow - Black Eyed Peas", 
        ano: 2009, 
        link: 'https://www.youtube.com/watch?v=4m48GqaOz90' 
    },
    { 
        musica: "TiK ToK - Kesha", 
        ano: 2010, 
        link: 'https://www.youtube.com/watch?v=iP6XpLQM2Cs' 
    },
    { 
        musica: "Rolling In The Deep - Adele", 
        ano: 2011, 
        link: 'https://www.youtube.com/watch?v=rYEDA3JcQqw' 
    },
    { 
        musica: "Somebody That I Used To Know - Gotye e Kimbra", 
        ano: 2012, 
        link: 'https://www.youtube.com/watch?v=8UVNT4wvIGY' 
    },
    { 
        musica: "Thrift Shop - Macklemore e Ryan Lewis", 
        ano: 2013, 
        link: 'https://www.youtube.com/watch?v=QK8mJJJvaes' 
    },
    { 
        musica: "Happy - Pharrell Williams", 
        ano: 2014, 
        link: 'https://www.youtube.com/watch?v=ZbZSe6N_BXs' 
    },
    { 
        musica: "Uptown Funk! - Mark Ronson e Bruno Mars", 
        ano: 2015, 
        link: 'https://www.youtube.com/watch?v=OPf0YbXqDm0' 
    },
    { 
        musica: "Love Yourself - Justin Bieber", 
        ano: 2016, 
        link: 'https://www.youtube.com/watch?v=oyEuk8j8imI' 
    },
    { 
        musica: "Shape of You - Ed Sheeran", 
        ano: 2017, 
        link: 'https://www.youtube.com/watch?v=JGwWNGJdvx8' 
    },
    { 
        musica: "God’s Plan - Drake", 
        ano: 2018, 
        link: 'https://www.youtube.com/watch?v=xpVfcZ0ZcFM' 
    },
    { 
        musica: "Old Town Road - Lil Nas X featuring Billy Ray Cyrus", 
        ano: 2019, 
        link: 'https://www.youtube.com/watch?v=r7qovpFAGrQ' 
    },
    { 
        musica: "Blinding Lights - The Weeknd", 
        ano: 2020, 
        link: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ' 
    },
    { 
        musica: "Levitating - Dua Lipa", 
        ano: 2021, 
        link: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw' 
    },
    { 
        musica: "Heat Waves - Glass Animals", 
        ano: 2022, 
        link: 'https://www.youtube.com/watch?v=mRD0-GxqHVo' 
    },
    { 
        musica: "Flowers - Miley Cyrus", 
        ano: 2023, 
        link: 'https://www.youtube.com/watch?v=G7KNmW9a75Y' 
    },
    { 
        musica: "I Had Some Help - Post Malone (feat. Morgan Wallen)", 
        ano: 2024, 
        link: 'https://www.youtube.com/watch?v=4QIZE708gJ4' 
    }
];
