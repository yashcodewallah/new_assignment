import React, { useState } from 'react'
import styled from 'styled-components'
import "./search.css";
const Search = () => {

  const [showFilter, setShowFilter] = useState(true)

  const handleshowFilter = (val) => {
    setShowFilter(val)
  }
  return (
    <Container>
      <SearchContainer>
        <InputSection>
          <label htmlFor='input1'>Nifty</label>
          <input type="text" value="Nifty" id="input1" ></input>
        </InputSection>
        <InputSection>
          <label htmlFor='input2'>Nifty</label>
          <input type="text" value="18 May 2023" id="input2" ></input>
        </InputSection>
        <Spot>
          <p>spot</p>
          28,152.0<span>0.35%</span>
        </Spot>
        <Spot>
          <p>Fut</p>
          82,152.1<span>0.35%</span>
        </Spot>
        <ParameterContainer>
          <Parameter>
            <label htmlFor='MaxPain'>Max Pain</label>
            <input type="number" value="18200" id="MaxPain" ></input>
          </Parameter>
          <Parameter>
            <label htmlFor='input2'>PCR</label>
            <input type="number" value="0.92" id="PCR" ></input>
          </Parameter>
          <Parameter>
            <label htmlFor='input2'>Support 1</label>
            <input type="number" value="18100" id="PCR" ></input>
          </Parameter>
          <Parameter>
            <label htmlFor='input2'>Resistance 1</label>
            <input type="number" value="18500" id="PCR" ></input>
          </Parameter>
        </ParameterContainer>
        <Filter>
          <img src="/images/filters.png" alt="" />
          <span onClick={() => handleshowFilter(true)}>Filters</span>
        </Filter>
        {showFilter &&
          <FilterContainer>
            <div className='filterHeader'>
              <h6>Filters</h6>
              <button onClick={() => handleshowFilter(false)}> <img src="/images/xmark-solid.svg" alt=" " /></button>
            </div>
            <div className='filterLtpRange'>
              <p> LTP range </p>
              <div>
                <input type="text"></input>
                <input type="text"></input>
              </div>
            </div>
            <div className='filterLtpChange'>
              <label>LTP change % by </label>
              <select id="mySelect">
                <option value="option1">Today Open</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>

            <div className='filterLtpStrike'>
              <label>Specific Strike</label>
              <input type="text" ></input>
            </div>
            <div className='filterDisplay'>
              <label>display</label>
              <div>
                <input type="checkbox" name="filterDisplayOption" value="option1" id="option1" />
                <label for="option1">Calls</label>

                <input type="checkbox" name="filterDisplayOption" value="option2" id="option2" />
                <label for="option2">Puts</label>
              </div>
            </div>
            <div className='hrLine' />
            <div className='filterButtonSection'>
              <button>Reset</button>
              <button>Apply</button>
            </div>
          </FilterContainer>
        }

        <Button>
          <button>Basket</button>
          <div>3</div>
        </Button>
      </SearchContainer>
      <SearchButtom>
        <button>LTP</button>
        <button>Geeks</button>
      </SearchButtom>
    </Container>
  )
}

const Container = styled.div`
width:85%;
position:sticky;
background:#FAFBFA;
top:0;
margin:auto;
display:flex;
justify-content:center;
margin-top:20px;
flex-direction:column;
`

const SearchContainer = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
`
const InputSection = styled.div`
display: flex;
flex-direction: column;
margin-bottom:20px;
label{
  width:50px;
  color:rgb(150,142,142);
  position:relative;
  background: linear-gradient(to bottom, #f1f1f1 50%, white 50%);
  top:10px;
  left:8px;
}
input{
font-family: "poppins";
height:30px;
font-size:18px;
padding-left:10px;
padding-top: 10px;
max-width:120px;
border: 0.5px solid brown;
}

`


const Spot = styled.div`

font-size:16px;
p{
  color:rgb(150,142,142);
  text-align:start;
}
span{
  font-size:12px;
  font-family:"poppins";
  margin-left:5px;
  color:green;
}
`

const ParameterContainer = styled.div`
display:flex;
gap:8px;
`
const Parameter = styled.div`
display:flex;
flex-direction:column;
label{
  font-size:15px;
  text-align:start;
  color:rgb(150,142,142);
}
input{
  border:none;
  background:none;
  width:60px;
  font-size:15px;
}
`

const Filter = styled.button`
border:none;
display:flex;
align-items:center;
margin-left:20px;
gap:10px;
img{
  max-width:22px;
}
span{
  font-family:"poppins";
font-weight:500;
cursor:pointer;
}
`

const Button = styled.div`
button{
  padding:12px 40px;
  Background-color:#2D57F4;
  color:white;
  font-size:15px;
  border:none;
}
div{
  width: 20px;
  height: 20px;
  background: yellow;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  float: right;
  right: 11px;
  bottom: 14px;
  border: none;
}
`
const SearchButtom = styled.div`
width:200px;
display:flex;
margin-top:20px;
gap:10px;
justify-content:flex-end;
align-self: flex-end;
button:nth-child(1){
  width:100px;
  padding:10px 10px;
  border:none;
  border-radius:12px;
  color:white;
  background:#2D57F4;
}
button:nth-child(2){
  width:100px;
  padding:10px 10px;
  background:#E1E1E1;
    border:none;
  border-radius:12px;
}
margin-right:25px;
`

const FilterContainer = styled.div`
position: absolute;
top: 55px;
right: 200px;
z-index:2;
width:320px;
padding: 10px;
display:flex;
gap:15px;
font-family:"poppins";
flex-direction:column;
align-items:start;
padding:10px;
background:white;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

`
export default Search