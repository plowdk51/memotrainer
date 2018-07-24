var curr;
var correct = 0;
var wrong = 0;

var phrases = [
	{ name: "ZO", val: "zero", used: false },
	{ name: "OE", val: "one", used: false },
	{ name: "TO", val: "two", used: false },
	{ name: "TE", val: "three", used: false },
	{ name: "FR", val: "four", used: false },
	{ name: "FE", val: "five", used: false },
	{ name: "SX", val: "six", used: false },
	{ name: "SN", val: "seven", used: false },
	{ name: "ET", val: "eight", used: false },
	{ name: "NE", val: "nine", used: false }
];

/*
BC
BD
BF
BG
BH
BI
BJ
BK
BL
BM
BN
BO
BP
BQ
BS
BT
BU
BV
BW
BX

CB
CD
CF
CG
CH
CI
CJ
CK
CL
CM
CN
CO
CP
CQ
CS
CT
CU
CV
CW
CX

DB
DC
DF
DG
DH
DI
DJ
DK
DL
DM
DN
DO
DP
DQ
DS
DT
DU
DV
DW
DX

FB
FC
FD
FG
FH
FI
FJ
FK
FL
FM
FN
FO
FP
FQ
FS
FT
FU
FV
FW
FX

GB
GC
GD
GF
GH
GI
GJ
GK
GL
GM
GN
GO
GP
GQ
GS
GT
GU
GV
GW
GX

HB
HC
HD
HF
HG
HI
HJ
HK
HL
HM
HN
HO
HP
HQ
HS
HT
HU
HV
HW
HX

IB
IC
ID
IF
IG
IH
IJ
IK
IL
IM
IN
IO
IP
IQ
IS
IT
IU
IV
IW
IX

JB
JC
JD
JF
JG
JH
JI
JK
JL
JM
JN
JO
JP
JQ
JS
JT
JU
JV
JW
JX

KB
KC
KD
KF
KG
KH
KI
KJ
KL
KM
KN
KO
KP
KQ
KS
KT
KU
KV
KW
KX

LB
LC
LD
LF
LG
LH
LI
LJ
LK
LM
LN
LO
LP
LQ
LS
LT
LU
LV
LW
LX

MB
MC
MD
MF
MG
MH
MI
MJ
MK
ML
MN
MO
MP
MQ
MS
MT
MU
MV
MW
MX

NB
NC
ND
NF
NG
NH
NI
NJ
NK
NL
NM
NO
NP
NQ
NS
NT
NU
NV
NW
NX

OB
OC
OD
OF
OG
OH
OI
OJ
OK
OL
OM
ON
OP
OQ
OS
OT
OU
OV
OW
OX

PB
PC
PD
PF
PG
PH
PI
PJ
PK
PL
PM
PN
PO
PQ
PS
PT
PU
PV
PW
PX

QB
QC
QD
QF
QG
QH
QI
QJ
QK
QL
QM
QN
QO
QP
QS
QT
QU
QV
QW
QX

SB
SC
SD
SF
SG
SH
SI
SJ
SK
SL
SM
SN
SO
SP
SQ
ST
SU
SV
SW
SX

TB
TC
TD
TF
TG
TH
TI
TJ
TK
TL
™
TN
TO
TP
TQ
TS
TU
TV
TW
TX

UB
UC
UD
UF
UG
UH
UI
UJ
UK
UL
UM
UN
UO
UP
UQ
US
UT
UV
UW
UX

VB
VC
VD
VF
VG
VH
VI
VJ
VK
VL
VM
VN
VO
VP
VQ
VS
VT
VU
VW
VX

WB
WC
WD
WF
WG
WH
WI
WJ
WK
WL
WM
WN
WO
WP
WQ
WS
WT
WU
WV
WX

XB
XC
XD
XF
XG
XH
XI
XJ
XK
XL
XM
XN
XO
XP
XQ
XS
XT
XU
XV
XW
*/

$(document).ready(function(){
	getRandomPhrase();
	
	$("#answer").keypress(function(e){
		if(e.which == 13){
			checkAnswer($(this).val());
			getRandomPhrase();
			return false;  
		}
	}); 
});

function checkAnswer(txt){
	if(phrases[curr].val == txt){
		correct++;
		$("body").animate({backgroundColor: "#4CAF50"}, function(){
			$("body").animate({backgroundColor: "#424242"});
		});
	}
	else{
		wrong++;
		$("body").animate({backgroundColor: "#F44336"}, function(){
			$("body").animate({backgroundColor: "#424242"});
		});
	}
}

function getRandomPhrase(){
	var num;
	if(countUnusedPhrases() == 0){
		$("#question").html(Math.floor((correct / (correct + wrong)) * 100) + "%");
		$("#answer").blur();
		$("#answer").val("");
		$("#answer").hide();
	}
	else{
		while(true){
			num = Math.floor(Math.random() * phrases.length);
			if(phrases[num].used == false){
				phrases[num].used = true;
				break;
			}
		}
		
		curr = num;
		$("#question").html(phrases[num].name);
		$("#answer").val("");
	}
}

function countUnusedPhrases(){
	var unused = 0;
	$(phrases).each(function(index, elem){
		if(elem.used == false) unused ++;
	});
	return unused;
}