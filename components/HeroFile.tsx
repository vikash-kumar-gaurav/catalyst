"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';

const AdmissionHero = ({data}:{data:any }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="relative h-[80vh] w-screen max-w-none overflow-hidden ">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={ data?.hero_img_url || "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhISEBAQFQ8VFRcVFRAPEA8VDw8VFRUWFhURFRUYHSggGBomHRUVITEhJikrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi8lHyYtLS0tLS0tLS0tLS0tKy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLSstLS0tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA8EAABAwIEAwYDBgQGAwAAAAABAAIRAyEEBRIxBkFREyIyYXGBM5GhFCNCUrHRB2LB8BUWcoLh8ZKiwv/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACoRAAICAgIBBAECBwAAAAAAAAABAhEDMRIhQQQTIlEyFJEFI2FxgaHw/9oADAMBAAIRAxEAPwD1oWVmiZ3VVpVugmFRabsurgXUowx+6AcQHb1R926zufeIeqaIsiiBstFlwsgAbcLQ4EWR8AB+fu7hWdC0HEHh9wgUKGTZbHooY51isnijL1rceLLKVR94o+S3g0OTNstLgW7IDlDe6tFgxsuiJzyClIK7RCq0grlJUEFWqBglxt+vkoGYpj5DTfoQQfWDyTcWNTwOTRPuf+lzEYUOAIs4Xa4bgqXN268FfbVKxp3UrAq1Kpq3EOFnDof2VumFZO1ZJqjrhZYzi+j3SVtisrxZTlhQejLZhGhSNCY1StXOWHtCTgr+Hy55Ac7ugiQIl7h1jkPWFDi8Pp2JPWRBH1KynG6sLhKrrogphSgJlNSgJyZyEiE6F2EQERamFqmITSFjEBau0mp5C6yyIB2oJJjkljHpzFcoiyq0wrdJOBFgJJJJRhh3WdzzxN9VojzWczrxhNEWRWbuFosFss8zxBaLB7I+AIE5/t7hBQjPEGw9UHUMmy2PRQzDYrKuH3i1OY7FZlg7/uo+S3g0+VN7oWgwg2QPLG2CPYVdMTnkE6QVukqlJW6ScQa9kOnqP0TCYPknYlxkbaR9ZVcVQCQSI5EyuW6kzqim4kGP+7Iqjw7P/wBPJ3t+kq9SNlBXqN0kbjoAg+Hz2lQc2i/UQZDSLhvRp6Dp6IrNGEuLewSxSkrSNEgXEVOWFXMVmzWiRpNpgug3MfuqmMe6s2NBDjIgke09FfmiHBnnHNabIckuH1gJFxTds3+Z46/y/PooKGDZhnjtHMNckkNkEUR+boXXt09djdPGAtPZtB9Tcxz81xvJylxidkMPx5SLZAEgX6k7n3WczwAExzH6OBV+jjtRgb/OELzwjUBJJ8+i0YUPkl8WDaamULFMF0nEOSSC7CIBpC4QnlNIWAMIXAE+FyEQDIST4XVjHplMK1SCrU1bppmZEqSSSARh5rN5z8QLSdVm82+IEyFkQ0vEFosLss9R8QWiw2y3gCAnEHL1QkIrxBy9UKCjk2Wx6B+Y7FZygO/7rRZlsUAwg7/uorZbwanLhYI5hkHy8WCM4cbLpRzsI0VbpqrRVpicQhzFpLLdUPw+GL4LjAG3UoljaepsSQOZG/ooKh0tJ2aBu4wB6lcOb82dmKTUKKuJLiC1gv8AmKyGe5f2ZD21HF2pjCYGimXvAnzMusPJaKhjtZrPp1KNSmGGOyqtf2bgDLXR1WZwlWo/AsrPntDiadRoO5DajTEdY1LlaTlcjoi2l0UuIMWzDuFBjquppYyXPl1TZxB/8gPVxWeq8Q4hjq1GdQaBJM3cBJB6+RU76Tjiaj3tLqbKjqsjxOALj77T/tVLFVnUMM2q8AVa+INQzBLGiNIj0Dfmnl8ugx+PZYoYl2IqlriRVbGpzrBrp7wLpjeR56Si1HOHUBpe6k6dg5pJ9iYv6SqXEOApMZh3B7mhwB0tu6SAS97Qdz1vFk3CGk9uh8mRGshpIvYD90cb4PoMnyXZoMorlwc8mRPImXek3VOvXNRxebSbDoBspsuqMoNsdTtgDED5KBwXVB2zmzNaExThQMU7VU5hwXUgurAGwknLkIgGwuQnQlCJjkJLsJLAPS6atU1XYFZYmZkSJJJIBGdVm80+IFpOqzeZfFTIWWyOh4locNss/hx31oaGyPgyAPEG49ULCJ5/u31Q1c+TZbHoGZnsUFwI7yM5psUKy4d5Tjso9GowIsEXw4QvBDZFqAXSjnZfoq0xV6Kn1AbphR2IFhJtv6rEcZPovq4Ht2h2HNZzXAn7pz+zd2Qe3YjVBv0W4qt1WItH1WQzbKWOFWnXaX0Km9Mm7XDZ7HbhwXBnlxmnXR14Y8otX2UK+WuOMc6kG06bGUwzTYOkPNbWObfhiPIo5mWEaadItADdMgRtYfLdB2ZDVbREY3EvoyJp1TT1FnNheG6591pA9opM1AzoADXbttsfNQcOSb+/+/2PDlClZ5hnFUUGvMDVP5Ra8ged0KzXDtfhKTq+p9Z7h2Tadnu1QQ0fJT8W4pr3PYQ5rtZLRIiAbD6oDm2d1HV8E2kxzzTb8MDvajYH/wBUuKNnRlk0ug2zOsZWfVollDVROg0C1xJIbOgVgbHlqgi2yDfb26BUpF+h1wKjXNcy92mbG/MSFp8uIL6tWlhqzcRUOpzq1M06VJ2kN1uceQAmBMnos/xfXoMp08PROrsWRqEXN5+ZmfVO6bqiWJyWy1lWYdq9rtJ1E3M+XRaJyxHCFaajQf7stu5dOJUqI5ncrE1ThQNU7VYgPCcmhPCJji4nLiIpxJdhKETHEk5JYB6UxWGKBqnYmZkSJJJIBGcis1j/AIpWk5LN434pTLQstiw3jWgobIBhfEj9HZYxns+8TfdD1fz7xN91QUMmy2PQKzXYoblguiGbbFVMrbdTjspLRpcEEWoBDMEEWotXSjnZcpKrinFxBkgAiw53UzgY8lUxodIuIPPmfIDmuX1OWvii+CHdsLmqXBwAkx1Qt+GqPbpdBN9TgTYDYFvP1VyjigADtbd1o9RuFYogGTAv5Wcg4+55Cnw8A1lANAb9P2QbiB57Gp2cucXFo6iDJJ6G8eyOPwnfBHZyPylzSBYkeckBZvjzRRpOxTWg1qTXbEyNbSyR1u4SPLyU1jffRWMk2rZ5HxvrbVogi8iTcS7nJI3VnC4epSDK48TRBJG8Gd+V1sMLwQ6s6pi8a55Y866eFMuFMAdwuaNjudI63QvPqJDSDXoME2a6nVYJB78k2iCI90MilFJIpCUW2wdmPFVXE9x7bR4WzuPIIK3D06gOkRV6SJA6GLeysuyokt1t7wsdEOY4cocLQp8XlApgGmNDz+Xf9klJaHK3DmENPEBsiADbnK2p2Wc4ZwBBNRziTtffzWjOy64aOLI7kcap2qu1WGqiJkgTgmBPBRAdSSSRFOLqSQKJjqSbqCSwD0sFT01XYrDEzMiRIpLjkAjOSzWL+KVpTss1iPiOTLQr2OwniR+lsgWEHeR6nsszGbz3xN91RV7PPGPdUeShk2Wx6A+amyhylqlzZSZC24SR2Ulo02XUeZV2tjGMgczYKjiMWGBD8vDsTWEg6W3J5Lkl6mUsnCJeOBKPJmn0lre8d+Q/RBOJG1H0+5UeHdGOILv5bb+iM4w9yIJgLJ4jO+xL2vGlwAgwZlxgQT5SeWyTNK5cUw4o+SnhOKWYVzaVaG1HeKjv2HnUdzd1HL9NhhMa18OpuEkAxtIIkSOVoXm3EOVUq7e3DQ6pTEhloqu/BTcOhdE+QKyGG4uq4c6HPcX6nF1STqqFpgvP+qpqdH5WNGxVfTyco3H9gZoK6f7n0RTeHyR4ubT1We4myqpXZpOkA8hJuNroDk/FrXhpL720gka3EnYeXmtO7iBunvtuBMgiCF0Rzwlvog8MovrsptxZa0MqhzXba2h2h3mYuEKz2hq8VQhh3Msj0kt2t9Sh/EfHFOm8t07Cd+Xr7/RZevx/RMTQmTEvfOmwg35f0laU4zXQVCUe2GMXpaIa0ln5tA7M/wCqO831FrFCMXimMGnsyxztm6g5r/NrtneliOh2QLGcb13FzWsDQ2ZaNyG+NoPUASOukjoqbcVYvY6de4I1MeejmnnNuoNt4c5eDqxlJaNXw9UlrhaJkEbX6/37BGHBZjhzHyTUIAB3ie9ykg8wefmPNH34tvIyPqPP0VVojLZM1TBDRjWqUY9vVMAtPqQmtrlUn4sFcbiB1RFoIdsUu1Ko/aB1SOIHVawUXu1KaapVL7UOqa7FDqjZqLvaJKj9pHVJawUe0MVimoGqwxOYcuO2XVx+yBhjtlmq3xHLSv8ACszVP3jvVMtCvZNhPEjrNkBwJ7x9UeZst4MZvPPGPdUeSu534x7qkdlCey2PQFzVXuHKMqhmqLcMiyn9lfou1cIXOIWgy3AtosAi5uT1TMJTDe84en7qV1QOMtmVDFjjjbk9sfJNz+K0QY+k4Xb8l5v/ABOpFtAvY06pYTEzDdQ/+l6dVfImf+FmeIcIKjH7agLCNuhXNlqE1JFcLbVM864fz2GGkXDXTA1XAHaO/D7QB/scgn+WhicQ4ggMJk23HVBeJ8lr4K7Xl1EuJDhvqtdx5m369SivB/FLQdNRwaYuTsYVZxde5iY8JK/byLs0GI4NDSHU6hkbT81YoZXidGk1XGxAG8LuaZviGs7bQG0bQXmC6egKny3PGaWmtVYHOgBuoSSeRhcUpZeP2dSjBGNzHhzFPcTULi4/i3NrC397qt/lSs4AAAH6r1NmLpVBLXMI38Qkx/RNNNpE2jl0CpH1eRdUTlgg+zzLD8M1WOaXmSI5HltM7o3Sy2lSljmN0G3mZsL9dvp0WhzOvTYIJbPTmsbjMTUr1TpP3YcO8PWF0wyTn2yMoQj0iDMce2jZu0Tb8WoGHfMNQ7/H3WubKlmtSdU7T3T+WTMen6IN2i78a+JwZH8jTf42eqkbnLuqy3ap7a6fiJZraeZuKsMzByytDFIzhHSlYyCwxzkjjHKBjE/QlDQ/7U7quHEu6rmhcLELNQvtLuqS5oSWs1H0m1WGKu1WGK5Icmv2Tk2osYbU8KzL2993qtNV8KzfZvL3kC0o30DydwB7x9VoGbLPYWzloKWyPgBm878Y91ROyvZ14wqLtlCey0NATNEf4Xo92TsgGZbrVcIAFqWCseTodOIdVA1hrT+CLgdSUSc0MENJLzz6eZ6BJmG0uqPNiTE846KpjaVQuEA6Rd3855N9FyZFKCstFqTI8TiuzPeqNuOc6UMr4oPJc7wAd1oN3nqfJVM3qV3TrcWMFg2mY5Tc81nsfWbTc1wc4GYc11h6g7ey4b9x0dihxVlnP8r+1sdTdYHpy9Fk8i/hm9tfU5wNJpGkEXcReT5L0jB1GvAIuPJFGPDQBEn8s7eZTQeTGnFPoWXGdNrRieIeBamLvVxTg0eCmxrQxvmepXn+efw/xVCXUyHtHn3oK9uxGM1d1sT6wFkOK8yxNHSWOpOaXAOphpLgOsz/AERx+olBqMWaWJT7kjyClWxeHInWI5Xj0RujxXidBaQekwea0VfOtVTs4puc64+7A0wefVDBmwqB802jSYPZsBILd/ULtU+fbiiLxuHSbKnaYivBqS1v5tpCir40MaWU+Xn4lcq4qliQB2hLRcRaP5SEMzSixt27xbdMlb7FbpWBcxcdIvuhquVjYgiCqq7IdI45u2MShPXCEwg6iTK0+VCwWYpbrUZTsEsxohhjVIGpMClAUihHpSLFLCULGIdCSkhJYx9DsU7FXpqwxXIjkyonplRYxyrsqmHYIKt1tlQw9SxR8A8g2ofvUcoHuoGRNQo3Q8KK0AzmdeMeiou2V7OfGPRUH7KE9loaAuZbrS8KmwWcxVMveGjclaxtNuGAY1ru0NMu1DYERa/Myjhg5MM3pGkbTHMfNC80xlNrw1ziHHYRuVDkOcNxBIa4nSDM8jOygznMadOBUcGuvBIJsN/nMe6X1Cr4sOJdgDPGS5j2xAcTdxl2+0eyxvFmZE4Z+psaXSOjgDAI8/8AlaDOMya5tQmo3TP4DLhFyAB7LFcZ1TUwzixwLWBsHm8SvMxRfuI9Gb/lhnhriCKAg/eGzW9Ud4eOKL6r8Q4BjiA0g7jmb8lmP4f5EGYdtd7O0q1HdxpM06bW8yObiVtMZihSY19R0EHZoBa3kJty3lL6vIoz4RBgi3HkxmdYyk3QCPxQ0g8+phYTMXvdiH6nkteNIn8B6f3zU2e5y4VHsqEB3ipVB4CY+huhYw1Qu1l3dcZLOYMSHDqNlPDga7fks8qXSBOI14dzA6HP1nvTuHbfO3NNyqt2hryIcXXGxF90UzVrK9IF/d0EEk2Ijos47GMDnVIl7rANNo/M7zXpQhzj/U4p5OMutFeuzS5z2GIPI2PkU2u57T4ptMTyKhcyTzjeBMXTmUBqmP1C7FiZyt2Q1qpcLqqiz6FKD1/1WT6eCpOjuu9inWNoDTYGSRbsae2gfN0qQUaA8TeWwNwjwYvEC091p8oNgoaLMMCPuQT5usFeoY6gxzZpgA+azxNjKNBdilCp086w5JhhLQLmQL9AuVc+oDwsJPQzKX9PL7HovhcKEniemJikdt5sFfwmOp1WktsQY0kifVLLDJKwEy6uJKJj6EpqwxV6e6sMXQyCHKOopFFUN0Air+E+izQxBBcPMrS4jwlZUjvO9UfAr2W8KJMo5SHdQrBNRdosiYzGc/E9lQfsr+c/E9kPqbKM9loaKWFYDXpyfxBHuMXhtF0v0yWjVzDSRMecT8kOyKmHVr8ro1xLl7cQw03c4c3pLbwren67C/yBvAGp1OpUL9bSe66DEeVz/RXc3Idq7jXH+cSpeGcL9nwjGnxTDonedvJV82BGqBFj/c+64P4hJ30X9Mu+zC5pSaPC0CxENAgEzPzJHyXMLkbcSPs72locQSRuWxJaOlhv5q9VbbVHI+USTf6BXuDcGa1GtXJ+/L3UmGB9020gf3yC4sKezrzSVV/gacVSplmHoNa1rG2aNmNHp1QXG4+XFr7sIOwLhPKRur/EL/s7tAAl1y8eJx2l3TeyB1cQabiXDYwATziwMbTa3mueONylyZdSio0irmGTEEagHUSD3XGTSIANnc2kGR6qvppMZqfPZMsPzG0hnmeUoxiq1R4FOBLrgWJa3r+tlkc+w+JrPFPQ9tARpFgR5nz/AHXq4MLyf2OGcq1szWb5q6s90WZyaOn9SqbGI0OGq1rQfPorOH4fqh3ebY8xzHovSjjo5eLewG3ff6WEiwTnVImT7/stJ/lxwBIkg8o+qhq5BUHei97HYkqiQziA9JgwBFu96nzT2VBpMTO0gXKJuyKq4QSfYFWG5LVDXdwyeZlGgUwG1xub7c4tyNlVLSDcTtc73290dq5S/VYbDlFzzP1URyqppBIIuYm5jlKHE3FlFndMuMflBFjPMpjGEkkt7vMtPdAU1bCPaHahJERN4lcbq0adpFpO8rUaiDD1SCABbqBznqo+6NUlxMm0wDKnbV2AG2/tYqA+I6gRIn9kADBTd6D32UmEqljmkHYjnZ3quPrDod7gGx2sp8vwb6zwT4WxJPrslk0kKa9r5EpJmpJcgT6Lp7qwxV6e6sMVmRR1xULj3lI87KvPeWRmS4nwlZf8R9StPivCVmBufVFaA9hTAjZFeSF4BFOSzMjLZyfvPZD6hsr+c/E9kPq7KM9loaI8kxAbWM81o80xbdNzHnOyxIJDwR1RLN8O6rSs4zFo3V/T9qhqTZr8vh9Gm7kJPr0lCsViA8OkbOdHo3/oob/DbEVdNWhWLjeWl3oAQOg8vMp+eVTSYTG5n5kwFw+sTjIrh20ZitmDWUHl3icXtHo1xGpazgCiPsrJse86D/P3gT7Qs3leSDHCmIPYglz3eriSz1uV6PTwjWgBtoECBsNkuDDabNmy90eecR0h9oDnfDZd3m6LN9gQfUhZ/HA1C54H3YcDz1Fw2A89l6VjOGqby7VUeWukkWkyZ3T25VSpACnTYA3YwJHnPXzU16eUO2U/UKVJGSy3I6rG6yYrOEyR8MG4Z+6qYzB1udSCPIQtVjKbifGs7jcK4l01D6ocmtBSvZnsbSqx8W/nCDv7ZpkVL+gRjGYPcl5n3goJisIPzlPGb+zOK+gjhs3cxv3jgY8lG7i+jzc36IJi6UMMusso9zCV1YoqS2Qn0ei1OLWR3S32hBcXxFiHmxsskTGxXRiyOavGEVsTkjRMxlQnvOTn4po/F9VmKmNd1VZ9dx5lU5paN7laNPWzdo/FI6GFyniWVRBa2BtCypci2VuhJLIxebYbdhaUSRf1Q3FV2SO4LCJJ5K1icRDUBrVpKRTkzOQfwlGi4Xb9UTpaKbYbYLL4TFwrtXGmEjcns3INfagkgDarkkOILPramrFNcSVWTRypuFVYe+kkigMnxXhPosu3c+q6kstAewrgUU5JJLMKMpnJ+89kNrGySSjPZaGgW095HaBtC4knx6BPYQy9gYZbYqzj8BTxBBfMc2jZ1o9kkk8oKWyak1ot4TDsptDWNDWjk0QFcaVxJGkugEdYqvUYCEklHN+JTFsHYmkOiz+YsEFwCSS8+R2xM5XqAjwrP48idkkkYjsF4u7HWWJrtgn1SSXZh8nJn8EJcVyUklcgclcKSSxjkolgHJJIMKJsdUQ0JJILRnssYcCVag8kkkAkzapjYLiSSBj/2Q=="}
            alt="Campus view"
            className={`w-full h-full object-cover transition-all duration-1000 ${loaded ? 'scale-100 opacity-100' : 'scale-110 opacity-70'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/50 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white mb-6">
              <span className="font-montserrat block">Admission Open</span>
              <span className="font-playfair block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                { data?.duration|| "5025-2028"}
              </span>
            </h1>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-8">
              {data?.tagline || "Begin your journey to excellence. Applications now being accepted for all programs."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Apply Now
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/20 text-white font-bold rounded-lg transition-all transform hover:scale-105">
                View Gallery
              </button>
            </div>
          </div>

          
        </div>
      </section>

      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(-10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>
    </>
  );
};

export default AdmissionHero;